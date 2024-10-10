
# Trumio

We present our features for the ecosystem around our standalone platform to the ecosystem - "Trumio University" along with a feature that incentivises existing trumio users to earn badges to improve their bidder profiles. We have implemented course recommender, news flash, bidder recommender and course recommender based on description of tickets for a project.

## Table of content:

1. [Brief About the features](#course-recommender)

2. [Folder structure and guide](#folder-structure)

3. [Steps for setup](#steps-for-setup)

4. [Tech Stack](#tech-stack)

5. [Credentials for demo](#for-demo)


## Course Recommender

We collected Udemy's course data through their API and obtained their course dataset in the form of a CSV file available on Kaggle. We concatenated the titles of the courses and their descriptions to form the corpus of text for each course. We expanded the contractions of the text and performed lower casing of the text as a standard preprocessing procedure. This processed text will be referred to as the ‘primary dataset’. 

The primary dataset was passed to a pre-trained “Multi-lingual Universal Sentence Encoder”. We have used the 'distiluse-base-multilingual-cased-v1' variant present in the Sentence-Transformers package to compute the embeddings for the primary dataset. Since the courses are present in various languages, the usage of a multilingual model is justified.

After computing the embeddings for the courses, we stored all the embeddings in a CSV file. Thus, we don't need to compute the embeddings repeatedly during the inference. After this, we take the tech stack provided by the user as a prompt, apply the same pre-processing techniques as the primary dataset, compute the embeddings for it, and use cosine similarity to retrieve the courses relevant to the domain. 

The same approach and model are used for recommending courses based on the skills demanded by the client in the ticket-course recommender.

## News Flash

We have used the NewsAPI to retrieve the latest news. It retrieves news from a total of 54 countries and many prominent and verified media sources. We have used the ‘get_everything’ method to retrieve the relevant news from all sources. We take the tech stack provided as a prompt to the API, and it performs a keyword search to retrieve the relevant results. We have applied a filter of English language and a time cap of 1 week from the current week to show relevant news from the week.

## Bidder Recommendation to Clients

We generated dummy data for various students, including their names, the number of projects they completed, the feedback from past clients they have worked for, and the courses completed by the students. We concatenated all the client feedback, referred to as the primary dataset.

We used the BERTweet model, which is basically a RoBERTa model fine-tuned on English Tweets for sentiment analysis. This model outputs scores for three sentiments: 'negative’, ‘neutral’, and ‘positive’ respectively. We applied a SoftMax function to the scores to obtain a discrete probability distribution. We multiplied the probability corresponding to the ‘positive’ label by 4 and added 1 as an inherent bias. 

Thus, we obtain a score between 1 to 5. This score acts as a star-based rating system that recommends to the client which student is the most suitable for the project. Further, the details of the number of completed projects, courses completed, and the appropriate badges are shown so the client can infer the most suitable candidate according to their needs.

## Folder structure
```bash
trumio
├───backend
│   ├───Features
│   ├───models
│   └───utils
├───app.js
├───public
└───src
    ├───assets
    │   ├───badges
    │   ├───bidderPage
    │   ├───landingPage
    │   ├───profileIcons
    │   └───userImages
    ├───components
    │   ├───bidderPage
    │   ├───landingPage
    │   ├───navbar
    │   ├───profilePage
    │   ├───projectsPage
    │   └───ticketsPage
    ├───contexts
    ├───data
    ├───pages
    ├───services
    └───app.js
```
The structure for backend

```bash
backend
│   app.py
│   imports.py
│   requirements.txt
│
├───Features
│       bidderRecommendor.py
│       courseRecommendor.py
│       newsFlash.py
│       projectManagement.py
│       Users.py
│       __init__.py
│
├───models
│       connection.py
│       coursesModel.py
│       projectModel.py
│       studentModel.py
│       __init__.py
│
└───utils
        loadFromsS3.py
        __init__.py
```

## Brief on the Files

**app.py**: This is the main file in which the recommender models are initialized, and all the endpoints are defined.

**imports.py**: This contains all the imports required in app.py.

**requirements.txt**: This contains all the dependencies used in setup.

### Features
**bidderRecommender.py**: This contains all the code for the bidderRecommender model.

**courseRecommender.py**: This contains all the code for the courseRecommender.

**newsFlash.py**: This contains the functions where we use the NewsAPI to get the news flash for the trending page and for your page.

**projectManagement.py**: This contains the functions to add and get the projects. Also, it contains the function to get courses on the tickets of the project, which uses the courseRecommender model.

**Users.py**: This contains the code for login and signup functionality.

### Models

**connection.py**: Here, the connection with the MongoDB database is established.

**coursesModel.py**: Here, the class for the CoursesUdemy collection is made.

**projectModel.py**: Here, the class for the Projects collection is defined along with some functions.

**studentModel.py**: Here, the class for the Students collection is defined along with some functions.

## Utils

**loadFromS3.py**: Here, we make a connection with the S3 bucket, get the required CSV files from the AWS S3 bucket, and convert them to a pandas dataframe for the models.


## Steps for Setup

#### Prerequisites:
Python Version: 3.9 - 3.10 (recommended)
Note: The setup instructions are provided for Windows systems. Commands must be executed in PowerShell. For other operating systems, commands may vary accordingly.
```bash
  python --version
```
### Frontend setup

#### Step 1: 
In the terminal go the project directory and install the dependencies
```bash
  pip i
```
#### Step 2: 
Use the npm start command to start the frontend
```bash
  npm start
```

### Backend setup

#### Step 1: 
Open a new terminal and go to project directory then go to the backend directory in it
```bash
  cd .\backend\
```
#### Step 2: 
make a virtual environment .
```bash
  python -m venv venv
```
#### Step 3: 
Activate the environment and install the dependencies.If error regarding unable to execute scripts on the system come you can refer this [article](https://stackoverflow.com/questions/4037939/powershell-says-execution-of-scripts-is-disabled-on-this-system).
```bash
  .\venv\Scripts\activate
  pip install -r requirements.txt
```
#### Step 4: 
Run the backend
```bash
  flask run
```

After both frontend and backend are started you can signup using the given credentials for the demo
## For Demo

#### email - t10@gmail.com
#### password - t10t10


## Tech Stack

**Client:** React, TailwindCSS, MaterialUI

**Server:** Flask, mongodb, pytorch, AWS S3, newsapi

