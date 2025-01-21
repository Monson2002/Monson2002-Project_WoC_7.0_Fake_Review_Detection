#  **Web Scraping for Reviews**

This project includes a Python script to scrape reviews from any product URL. The scraped data can be used for detecting fake reviews.

## Libraries Used
- `pandas`: To structure and save data.
- `selenium`: For dynamic content scraping if needed.

## **Tasks Overview**

### **Task 1: Set Up Environment**
Installed all required modules.

### **Task 2: Develop the Web Scraping Script**
- Use `webdriver.Chrome()` from Selenium to start a Chrome browser instance.
- `ChromeDriverManager().install()` automatically installs and sets up the required ChromeDriver version.
- Use the get() method of the WebDriver to navigate to the desired Amazon product page URL.
Locate the Review Section:
- Find the reviews section on the page using XPath. In this case, the reviews are identified using `data-hook='review-collapsed'`.
- Iterate through all the found review elements and extract their text content using `review.text`.
- Create a pandas DataFrame using the reviews list. The DataFrame will contain a single column named Reviews with the text of each review.
- Use `df.head(5)` to print the first 5 reviews.

### **Task 3: Saving Results**
- The reviews are then saved into a CSV file using `df.to_csv("Reviews.csv", index=False)`.

```
