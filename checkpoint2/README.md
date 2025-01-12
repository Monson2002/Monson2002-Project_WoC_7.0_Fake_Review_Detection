# **Fake Review Detection Project**

This repository contains the code and models for the Fake Review Detection project. The goal of this project is to classify reviews as genuine or fake using machine learning models.

## **Tasks Overview**

### **Task 1: Load the Dataset and Inspect its Structure**
The dataset (`checkpoint1_dataset.csv`) is loaded using pandas, and its structure is inspected using `head()` and `info()` methods to display sample rows and metadata about the columns.

### **Task 2: Split the Dataset**
- The dataset is split into features (X) and labels (y) using the `tokenised_reviews` and `label` columns, respectively.
- The data is divided into training and testing sets with an 80-20 split using `train_test_split()`.

### **Task 3: Train Models Using Pipelines**
Pipelines are defined for three classifiers:
- **Random Forest**: Combines a `TfidfVectorizer` for text feature extraction and a `RandomForestClassifier`.
- **Support Vector Classifier (SVC)**: Uses a `TfidfVectorizer` followed by an `SVC`.
- **Logistic Regression**: Includes a `TfidfVectorizer` and a `LogisticRegression` classifier.

Each pipeline is trained using the `fit()` method, and the trained models are saved as `.pkl` files using `joblib.dump()`.

### **Task 4: Evaluate Models**
The models are evaluated on the test set using the following metrics:
- **Accuracy**
- **Precision**
- **Recall**
- **F1 Score** (weighted average)

The best-performing model is selected based on the highest F1 score.

### **Task 5: Save Trained Models**
Each trained model is saved in the current directory with the following filenames:
- `random_forest_model.pkl`
- `svc_model.pkl`
- `logistic_regression_model.pkl`

### **Task 6: Perform Test Predictions**
Sample reviews are provided for each saved model to perform predictions and validate their functionality. The predicted labels for each sample review are printed.

```
