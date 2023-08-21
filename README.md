# GoGreenApp

The motivation for this project was to gain exposure to a range of new technologies and tools while building a meaningful Webapp. In order to make an impact and take climate action we need to start with ourselves, in order to do so we need easy to use Carbontrackers so that people can educate themselves and gain a better understanding about the extent of emissions caused by daily activities. GoGreen is an easy to use Carbontracker that makes tracking performance and accessing information easy, it only focuses on 4 main categories: Transport, Household, Food & Personal Care to ease users into their climate action journey. 

GoGreen is a one-stop shop for:
  * Accessing information about reducing your Carbon footprint
  * Enter your daily activities using way understandable parameters using an API (https://www.climatiq.io/) to transform them into actual carbon emissions
  * Set monthly goals
  * Track performance for each month, evolution over the last 6 months and see your performance compared to your goals
  * Gamifies the process of tracking your carbon emissions by using a points system for using the App

Technologies/Tools used:
  - Planning process:
    * Creation of user personas to understand who we are targeting and build features accordingly
    * Figma to design the frontend
    * E-R diagram to design database and DB normalization
  - Building process:
    * Postman to test out the API (Climatiq) used to calculate the emissions
    * React as well as MUI and recharts libraries to build the frontend
    * Python backend using Flask, SQLAlchemy for DB access and alembic to allow for easily making changed to the DB

Features: 
* Account Creation/Log in to ensure a personalized user experience
* Users can input their daily activities in the categories Transport, Household, Food & Personal Care which are also split into more detailed subcategories (all subcategories, API codes for Climatiq API can be found in the subcategories.js file). 
Users can set monthly goals for subcategories, track their monthly performance against these goals and their performance over the last 6 months relative to the current goal. 
* The site also aims to make Information easily accessible to users and allows them to test their knowledge using a short quiz. 
* Users can gain points through activities as simple as logging in or logging activities and setting goals and then subsequently track them on their profile.

Instructions: 
* Start by creating a log in if it does not already exist (any personal information such as name etc. are optional to provide - only a username is required to use the Webapp)
* The Info page aims to educate the user about the main 4 categories used in the Webapp and allows them to do an initial knowledge check using a quiz.
* The Footprint page allows users to add their daily activities and will display the total carbon footprint (in kg) as well as the breakdown of the 4 categories of all logged activities. 
* The Dashboard page allows the user to understand their carbon footprint in more detail by showing the monthly emissions per category, the percentage change compared to the previous month, the 6 month performance of total carbon footprint across categories vs. the total emissions for the monthly goals set across all categories. Here users can also set monthly goals for each subcategory.
* The profile page allows users to personalize their profile, see their activity log and their total current points.
