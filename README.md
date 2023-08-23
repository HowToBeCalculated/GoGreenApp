# GoGreenApp

## Inspiration
The motivation for this project was to gain exposure to a range of new technologies and tools while building a meaningful Webapp. In order to make an impact and take climate action we need to start with ourselves, in order to do so we need easy to use Carbontrackers so that people can educate themselves and gain a better understanding about the extent of emissions caused by daily activities. GoGreen is an easy to use Carbontracker that makes tracking performance and accessing information easy, it only focuses on 4 main categories: Transport, Household, Food & Personal Care to ease users into their climate action journey. 

## About the web app
#### 1. GoGreen is a one-stop shop for:
  * Accessing information about reducing your Carbon footprint
  * Entering your daily activities using way understandable parameters using an API (https://www.climatiq.io/) to transform them into actual carbon emissions
  * Setting monthly goals
  * Tracking performance for each month, evolution over the last 6 months and see your performance compared to your goals
  * Gamifying the process of tracking your carbon emissions by using a points system for using the App

#### 2. Features: 
* **Account Creation/Log In:** Ensure a personalized user experience.
* **Activity Input:** Users can input their daily activities in categories such as Transport, Household, Food & Personal Care, which are further divided into detailed subcategories (all subcategories and API codes can be found in the subcategories.js file).
* **Goal Setting:** Users can set monthly goals for subcategories and track their performance against these goals.
* **Performance Tracking:** View monthly performance compared to set goals and track performance over the last 6 months relative to the current goal.
* **Access to Information:** Easily access information on reducing carbon footprints.
* **Quiz:** Test your knowledge with a short quiz.
* **Points System:** Gain points through various activities, such as logging in, recording activities, and setting goals, and then track your points on your profile.

#### 3. Instructions: 

* **Sign Up/Log In Page:**

  **Purpose:** This page allows users to create an account or log in to an existing one.
  * Users can start by signing up if they don't have an account (only a username is required).
  * Alternatively, they can log in if they already have an account.

* **Info Page:**

  **Purpose:** This page educates users about the four main categories in the webapp, including Transport, Household, Food & Personal Care.
  * This section includes an initial knowledge check through a quiz.
  * Users can explore and learn how to reduce their carbon footprint in these categories.

* **Footprint Page:**

  **Purpose:** 
  This page allows users to view their total carbon footprint (in kg) and provides a breakdown of the four categories for all logged activities. In addition, users can add new records, and the page updates accordingly when they navigate away and return.

* **Dashboard Page:**

  **Purpose:** This page helps users understand their carbon footprint in detail and manage their goals.
  * It displays monthly emissions per category and the percentage change compared to the previous month.
  * Users can view their six-month performance of total carbon footprint across categories vs. the total emissions for the monthly goals set across all categories.
  * Users can set monthly goals for each subcategory.

* **Profile Page:**

  **Purpose:** This page allows users to personalize their profile, view their activity log, and check their total current points.

  
## How we built it:
  - Planning process:
    * Creation of user personas to understand who we are targeting and build features accordingly
    * Figma to design the frontend
    * E-R diagram to design database and DB normalization
  - Building process:
    * Postman to test out the API (Climatiq) used to calculate the emissions
    * React as well as MUI and recharts libraries to build the frontend
    * Python backend using Flask, SQLAlchemy for DB access and alembic to allow for easily making changed to the DB

## Challenges that we ran into
#### 1. Team Skill Levels:
Our team consists of four members, and while most of us had limited experience with creating web apps, we embraced the opportunity to learn. Two of our team members were completely / relatively new to the program, which presented a unique learning curve. However, we successfully navigated these challenges with the guidance and support of our more experienced team members.
#### 2. Unexpected Setback: 
During the project, we encountered an unexpected setback when one of our team members had to step away due to a broken right hand. Despite this challenge, we adapted our roles and continued to make progress.
#### 3. Work Reallocation: 
In response to unexpected events, such as certain laptop settings and limitations, we needed to reallocate some tasks and adjust our schedule. This allowed us to maintain our project's momentum and keep moving forward.
#### 4. Time Zone Differences and Work Commitments:
Our team members are spread across different time zones, and many of us have additional work commitments. Nevertheless, we proactively found common meeting times and remained flexible in accommodating each other's schedule changes, ensuring effective collaboration.

## Accomplishments that we're proud of
* Our adaptability and willingness to accommodate changes throughout the project have been outstanding. Additionally, we've readily taken on additional work when needed to ensure the project stays on track.
* We maintain an open-minded approach to new technologies introduced by team members and willingly tackle tasks we haven't encountered before, fostering continuous learning.
* Team members with more experience have been exceptionally supportive in resolving challenges and offering guidance to those with less experience. This collaborative environment has strengthened our team bonds and enabled us to progress effectively.

## What we learned
Each of us comes from different backgrounds and starting points, making our journey unique. Nevertheless, we successfully learned at least one tech stack, which includes:
* Designing the front end using industry-standard tools like Figma,
* Creating the ERD,
* Utilizing Postman and APIs,
* Mastering technologies like MUI and React, and
* Setting up the backend using Flask and SQLAlchemy.

## What's next
Our journey doesn't end here. We have exciting plans for the future of our project:

#### 1. Design Enhancement: 
We are committed to improving the overall user experience by harmonizing the look and feel of all web app pages. This will create a seamless and visually pleasing interface for our users.

#### 2. Scaling and Features: 
To better cater to our users' needs, we'll be expanding the range of activity options available. Additionally, we're working on providing more flexibility in unit conversion and data logging frequency. Users will soon have the option to log data by day or by month, giving them greater control over their information.

#### 3. Enhanced Security: 
We take the security of our users' data seriously. As part of our ongoing efforts, we will implement stricter measures to handle confidential information. This includes enhanced password protection and more secure management of API authentication information.

#### 4. User-Centric Improvements: 
We will actively engage with our users and stakeholders to collect their insights and suggestions. This invaluable input will be used to further enhance the user-friendliness of our app.
