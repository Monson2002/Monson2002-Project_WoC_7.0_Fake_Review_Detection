# **Review Scraping & Classification Website**

This project is a full-stack web application that scrapes product reviews and classifies them as "Real" or "Fake" using a trained machine learning model (Support Vector Classifier).

## **Overview**

The application provides a user-friendly interface where users can enter a product URL. The backend then scrapes reviews from the specified URL, classifies each review, and returns the results to be displayed on the frontend.

## **Getting Started**

### **Environment Setup**
- **Backend:**  
  - Install Python and required libraries: `selenium`, `pandas`, and machine learning libraries.
- **Frontend:**  
  - Install Node.js and the necessary CLI tools for your chosen framework (e.g., Create Vite App for React).

### **Running the Application**

1. **Backend:**  
   - Start the backend server that handles web scraping and classification.
   - Commands:
     ```bash
     cd .\backend 
     ```
     ```bash
     venv\Scripts\activate
     ```
     ```bash
     python main.py
     ```
2. **Frontend:**  
   - Run the frontend development server.
   - Example command (for React):
     ```bash
     cd .\frontend 
     ```
     ```bash
     npm run dev
     ```

### **Notes**
- Verify that the backend API endpoint URL is correctly configured in your frontend code.
- The web scraping script should be adapted to handle any dynamic content on the product page.
- The classification model is pre-trained; ensure it is correctly loaded and integrated on the backend.

---
