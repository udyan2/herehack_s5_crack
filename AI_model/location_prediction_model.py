# -*- coding: utf-8 -*-
"""Location Prediction Model.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1O3NxpVR3kP9aFyMmbTwLLYFCgGSsHjBh
"""

# Commented out IPython magic to ensure Python compatibility.
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
# %matplotlib inline

columns = ['Factor1', 'Factor2', 'Factor3', 'Factor4', 'Class_labels'] 
# Load the data
df = pd.read_csv('train_svm.csv')
df.head()

# Separate features and target  
data = df.values
X = data[:,0:4]
Y = data[:,4]

# Calculate average of each features for all classes
Y_Data = np.array([np.average(X[:, i][Y==j].astype('float32')) for i in range (X.shape[1]) for j in (np.unique(Y))])
Y_Data_reshaped = Y_Data.reshape(4, 3)
Y_Data_reshaped = np.swapaxes(Y_Data_reshaped, 0, 1)
X_axis = np.arange(len(columns)-1)
width = 0.25

print(Y)

# df2=df.dropna().reset_index(drop=True)

# Calculate average of each features for all classes
Y_Data = np.array([np.average(X[:, i][Y==j].astype('float32')) for i in range (X.shape[1])
 for j in (np.unique(Y))])
Y_Data_reshaped = Y_Data.reshape(4, 3)
Y_Data_reshaped = np.swapaxes(Y_Data_reshaped, 0, 1)
X_axis = np.arange(len(columns)-1)
width = 0.25

# Split the data to train and test dataset.
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.2)

# Support vector machine algorithm
from sklearn.svm import SVC
svn = SVC()
svn.fit(X_train, y_train)

# Predict from the test dataset
predictions = svn.predict(X_test)
# Calculate the accuracy
from sklearn.metrics import accuracy_score
accuracy_score(y_test, predictions)

from sklearn.metrics import classification_report
print(classification_report(y_test, predictions))

X_new = np.array([[3, 2, 1, 0.2], [  4.9, 2.2, 3.8, 1.1 ], [  5.3, 2.5, 4.6, 1.9 ]])
#Prediction of the species from the input vector
prediction = svn.predict(X_new)
print("Location Prediction: {}".format(prediction))

# Save the model
import pickle
with open('svm_model.pickle', 'wb') as f:
    pickle.dump(svn, f)
# Load the model
with open('svm_model.pickle', 'rb') as f:
    model = pickle.load(f)
model.predict(X_new)

