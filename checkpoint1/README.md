# 📝 **Preprocessing Steps for Fake Review Detection**

This document outlines the preprocessing steps performed on the dataset for the Fake Review Detection project.

---

## **Step 1: Load the Dataset and Perform Basic EDA**

- The dataset was loaded as a Pandas DataFrame.
- Basic Exploratory Data Analysis (EDA) was carried out to understand the structure and content of the data.

---

## **Step 2: Check for Missing Values**

- Checked for missing values in all columns.
- 🟢 **Result:** No missing values were found.

---

## **Step 3: Remove Duplicate Rows**

- Identified **12 duplicate rows** in the dataset.  
- These duplicates were removed, reducing the dataset size from **40,432 rows** to **40,420 rows**.

---

## **Step 4: Normalise the Text Data**

The following operations were performed to normalise the text data:
- Converted all text to **lowercase**.
- Removed **special characters**, **punctuation**, and **numbers**.

---

## **Step 5: Tokenise the Reviews**

- Tokenisation was performed using the **`nltk`** library.
- Each review was split into an array of individual words (tokens).

---

## **Step 6: Remove Stopwords**

- Common **stopwords** such as "the", "is", and "and" were removed.  
- This step helps in focusing on meaningful terms in the reviews.

---

## **Step 7: Apply Lemmatisation**

- **Lemmatisation** was applied to reduce words to their base form.  
- Example:  
  - "running" → "run"  
  - "ran" → "run"  
- This ensures consistency in word representation.

---

## **Step 8: Convert Text to Numerical Vectors**

- Used **TF-IDF (Term Frequency-Inverse Document Frequency)** to transform the preprocessed text into numerical vectors.
- These vectors are used as input for model training and evaluation.

## **Step 9: Saved the preprocessed dataset**

---