from flask import Flask, jsonify, request
from flask_cors import CORS

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import joblib

import time

app = Flask(__name__)

CORS(app, resources={
  r"/*": {
    "origins": ["http://localhost:5173"],
    "methods": ["GET", "POST", "OPTIONS"],
    "allow_headers": ["Content-Type"]
  }
})

@app.route("/", methods=["POST", "GET", "OPTIONS"])
def post_reviews():
  search = request.args.get('search', '')
  url = search
  
  reviewArr = [] 
  # Set up Selenium options
  options = Options()
  
  # Remove headless mode for debugging
  # options.add_argument("--headless")  
  options.add_argument("--no-sandbox")
  options.add_argument("--disable-dev-shm-usage")
  options.add_argument("--disable-blink-features=AutomationControlled")
  options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
  
  driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
  
  try:
    # Retry logic for navigating to the page
    max_retries = 3
    for attempt in range(max_retries):
      try:
        driver.get(url)
        print(f"Attempt {attempt + 1}: Navigated to URL")
        time.sleep(3)  # Wait for the page to load
        break
      except Exception as e:
        if attempt == max_retries - 1:
          raise e
        print(f"Retrying... ({attempt + 1}/{max_retries})")
    # Wait for reviews to load
    WebDriverWait(driver, 100).until(
      EC.presence_of_element_located((By.XPATH, "//li[@data-hook='review']"))
    )
    print("Reviews loaded successfully.")
    # Scrape reviews
    reviewScraped = driver.find_elements(By.XPATH, "//li[@data-hook='review']")
    onlyReviewScrapped = driver.find_elements(By.XPATH, ".//span[@data-hook='review-body']")
    
    print(f"Found {len(reviewScraped)} full reviews and {len(onlyReviewScrapped)} collapsed reviews.")
    reviews = [review.text for review in onlyReviewScrapped]
    reviewList = [review.text.split('Report') for review in reviewScraped]
    
    model = joblib.load("./models/svc_model.pkl")
    
    for reviewItem in range(len(reviewList)):
      try:
        name, reviewTitle, dateNLoc, color = reviewList[reviewItem][0].split('\n')[:4]
        review = reviews[reviewItem]
        prediction = model.predict([review])
        
        reviewObj = {
          'name': name,
          'reviewTitle': reviewTitle,
          'dateNLoc': dateNLoc,
          'color': color,
          'review': review,
          'prediction': prediction
        }
        reviewObj['prediction'] = reviewObj['prediction'].tolist()
        reviewArr.append(reviewObj)
        print(f"Review {reviewItem + 1} processed successfully.")
      except Exception as e:
          print(f"Error processing review {reviewItem + 1}: {e}")
    return jsonify(reviewArr)
  except TimeoutException:
    print("Timeout while waiting for reviews.")
  except Exception as e:
    print(f"Error during scraping: {e}")
  finally:
    driver.quit()
    print("WebDriver closed.") 

if __name__ == '__main__':
  app.run(debug=True, port=8080)