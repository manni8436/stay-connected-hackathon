DON'T FORGET TO GENERATE THE TABLE OF CONTENT - 

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>



# HACKATHON MAY 2022: GETTING CONNECTED
# Plugged-in Application

[![showpiece home page](README_files)](https://?????.herokuapp.com/)

Click [here](https://????.herokuapp.com/) to live site.  
------

## UX

UX Design is a process that can be used to design anything from products to bicycles to mobile applications. The focus of this design process puts the users' needs first--making their interaction with the application a pleasureable one.

#### Flexibility and efficiency of use

The apllication allow the users to tailor frequent actions by providing a simple and user friendly experience.

#### Aesthetic and minimalist design

The application does not contain irrelevant or rarely needed information, following a minimal design with pastel colours to make the aesthetic experience playful. The user has clear visibility of the application's information and usage.

## Purpose

[Code Institute](https://codeinstitute.net/se/) and [Trust in SODA](https://www.trustinsoda.com/) collaboratively organised the May Hackathon 2022 - "GETTING CONNECTED". The theme of the Hackathon was to highlight the importance of 'staying connected' with solutions to help people connect virtually for a more connected world.

Plugged-in aims to 'stay connected' with friends and family members by playing simple javascript games and competing within the group.
Get more people plugged into your group, play more games, to have immense competition on the games' scoreboards. 

## User Stories

### User Stories that have been satisfied by creation of particular apps in ths project:

| id  |  content |
| ------ | ------ |
|[#31](https://github.com/manni8436/stay-connected-hackathon/issues/31)| As a Player, I can register as a user and have the ability to log in so that my score is saved and connect with family and friends |


### User stories that are planned for next sprint

| id  |  content | 
| ------ | ------ |
|[#32](https://github.com/manni8436/stay-connected-hackathon/issues/32)| As a Player, I can play co-op games with family and friends and score up together |


## Wireframes 

The general structure of the page was based on 1/3 proportions in many of it's features. Wireframes were created with [Balsamiq](https://balsamiq.com/wireframes/?gclid=Cj0KCQiAubmPBhCyARIsAJWNpiMYzrk_0rLzl3vgYKRLXwnX7rpqyQiUFdyt3xHGpRiHlZlozwO_pvcaAvUFEALw_wcB).

The whole of design has been saved in this [pdf file](????). 


## Agile Methodology

### Canban board and issues

![Screenshot of the canban board](README_files/???)


Github issues were used to create the User stories and group them according to MoSCoW prioritization technique. Link to the project with live issues can be found [here](???). The issues are currently in two categories - done or for the next relese. 

The issues were than closed automaticaly when the pull request was linked to the issue. 





## Existing Features

### Navbar and Footer



### Footer




### Home - landing page

 

### Profile

user's profile


### Group Dashboard



### Games
describe general theme of games - they come from project from each participant

#### Cards game
describe game
#### Canvas

describe game

#### Rock Paper Scizors
describe game
#### Quizz
describe game
## Future Features 

write how the app can be expanded



## Technologies Used

### Languages Used

   + HTML5
   + CSS3
   + JavaScript
   + jQuery (check if jquery was used ???)
   + Python
   + Django

### Technologies and Programs Used:
+ GitHub
    The Git was used for version control
    Git issues were used for user stories
    GitPod was used as IDE to write the code and push to GitHub
+ Heroku 
    The page was deployed to Heroku
+ PostgreSQL
    PostgreSQL was used as database for this project
+ AWS S3 bucket sstorage (check if AWS was used ???)
    for storing static files and media files

 ### Frameworks Libraries and Programs Used

+ Balsamiq:
    Balsamiq was used to create the wireframes during the design process.
+ Bootstrap 5:
    Bootstrap was used to add style to the website.
+ Bootstrap icons
+ Django

## Code Validation

### HTML beautify

[online HTML code Beautifier](https://htmlbeautify.com/). 

### HTML valiation

[HTML validator](https://validator.w3.org/nu/#textarea)


| App  |  Pages | Result |
| ------ | ------ | ------ |
|  Home | All | [No errors](README_files/???) |



### CSS validation

Due to extensive user of Bottstrap classes, only minimial styling was applied to the Home Page. Most of the CSS code comes from bootstrap's carousele template with some modifications. 
The styling to the games was created with CSS code. The CSS code was validated with [Jigsaw Validator](https://jigsaw.w3.org/css-validator/) 

| App  |  CSS Games | Result |
| ------ | ------ | ------ |
|  Home | All | [No errors](README_files/CSS_Validator.png) |



### JavaScript validation

Javascript code validation was complited on [jshint](https://jshint.com/)
Initialy it was returning errors in relation of ES6 syntax, which was resolved by adding this line to the beggining of the file
```
/*jshint esversion: 6*/
```

Second issue with jshint was that it wasn't recognizing syntax of JQuery. This was resolved by adding the below code:
```
/*globals $:false */
```
Most of the results came with no errors except of stripe_element.js It has returned that Stripe is undefined. This is due to core functionality reffering to Stripe. Copy of the code was taken from older version Stripe pages that were referenced in Butique Ado.

| App  |  file | result |
| ------ | ------ | ------ |
|  games | card_game | [no errors](README_files/???) |
|  games | next_game | [no errors](README_files/???) |


### Python beautify
All pages were initialy put through [Python Formatter](https://codebeautify.org/python-formatter-beautifier) which automaticaly sorted most of the too long lines errors. Than the code was checked by pylint and problems were displayed in the console. Once the issues were cleared I have put all code though pep8 validator.

### Pep 8 

```
Python3 -m flake8
```
### Python validator


| App name  |  file name | result |
| ------ | ------ |------ |
| home |  urls.py |  [all ok](README_files/???) |
| games |  urls.py |  [all ok](README_files/???) |



## Tests
------

### Automated tests

Automated tests have not been created due to time constrains of the project.

### Lighthouse



![lighthouse report](???)

### Manual tests

List the manual tests performed

## Project Bugs and Solutions:

list the bugs here

## Bugs left in the project

list the bugs here 

## Deployment and making a clone

### Deployment to heroku

**In your app** 

1. add the list of requirements by writing in the terminal "pip3 freeze --local > requirements.txt"
2. Git add and git commit the changes made

**Log into heroku**

3. Log into [Heroku](https://dashboard.heroku.com/apps) or create a new account and log in

4. top right-hand corner click "New" and choose the option Create new app, if you are a new user, the "Create new app" button will appear in the middle of the screen

5. Write app name - it has to be unique, it cannot be the same as this app
6. Choose Region - I am in Europe
7. Click "Create App"

**The page of your project opens.**

8. Go to Resources Tab, Add-ons, search and add Heroku Postgres

9. Choose "settings" from the menu on the top of the page

10. Go to section "Config Vars" and click button "Reveal Config Vars". 

11. Add the below variables to the list

    * Database URL will be added automaticaly
    * Secret_key - is the djnago secret key can be generated [here](https://miniwebtool.com/django-secret-key-generator/). 


**Go back to your code**

12. Procfile needs to be created in your app
```
web: gunicorn PROJ_NAME.wsgi
```

13. In settings in your app add Heroku to ALLOWED_HOSTS

**Go to your terminal**

14. Add and commit the changes in your code and push to your branch

15. Log into Heroku from your commandline:

```heroku login -i```

16. Type your email and password and you should be logged in to heroku

17. Connect your repository to heroku by typing in commandline

```heroku git:remote -a YOUR-APP-NAME```

18. Push the changes from your branch to Heroku
```git push heroku main```

19. It can take a while, you should see the heroku log that shows you the stages of deployment

20. If the deployment was succesful you should get the link to your app in the terminal, follow the link to the live page


### Forking the GitHub Repository

By forking the GitHub Repository you will be able to make a copy of the original repository on your own GitHub account allowing you to view and/or make changes without affecting the original repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](repo here???)
2. At the top of the Repository (not top of page) just above the "Settings" button on the menu, locate the "Fork" button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](repo here???)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open commandline interface on your computer
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone http..repo here???
```

7. Press Enter. Your local clone will be created.

### Setting up your local enviroment

1. Create Virtual enviroment on your computer or use gitpod built in virtual enviroment feature.

2. Create env.py file. It needs to contain those 5 variables.

* Database URL can be obtained from [heroku](https://dashboard.heroku.com/), add PostgreSQL as an add on when creating an app. 
* Secret_key - is the djnago secret key can be generated [here](https://miniwebtool.com/django-secret-key-generator/). 
* Google API key can be obtained [here](https://cloud.google.com/gcp?authuser=1) you will have to register with google and create new app to get the API key. Follow the instructions on the website.

```
DEVELOPMENT
SECRET_KEY

```
PostgreSQL and AWS keys are needed only on Heroku, not in local IDE

3. Run command 
```
pip3 install -r requirements.txt
```


### Getting email variables from gmail


- Log into gmail account
- Go to Settings and than See all settings
- Top menu go to Accounts and import
- Find on the list Other google account settings
- Left side menu - Security
- Turn on two step verification: add phone number and follow instructions
- Go back to security
App passwords - Select Mail, Select Device - Other, Django, Copy app password.

In Heroku 
EMAIL_HOST_PASS is the password copied from above.
EMAIL_HOST_USER is the gmail email address


### Setting AWS bucket ??? remove if AWS wasn't used


1. Go to [Amzon Web Services](https://aws.amazon.com/) page and login or register

2. You should be redirected to AWS Managment Console, if not click onto AWS logo in top left corner or click Services icon and choose Console Home

3. Below the header AWS Services click into All Services and find **S3** under Storage

4. Create New Bucket using **Create Bucket** button in top right hand corner

- **Configuration:** type in your chosen name for the bucket (preferably matching your heroku app name) and AWS Region closest to you


- **Object ownership:** ACLs enabled, Bucket owner preffered

- **Block Public Access settings:** Uncheck to allow public access, Acknowledge that the current settings will result that the objects within the bucket will become public

- Click **Create Bucket**

5. You are redirected to Amazon S3 with list of your buckets. Click into the name of the bucket you just created

6. Find the tab **Properties** on the top of the page:
**Static website hosting** at the bottom of the properties page: clik to edit, click enable, fill in index document: index.html and error.html for error

7. On the **Permissions** tab:
- Cross-origin resource sharing (**CORS**) Paste in the below code as configuration and save

```
[
  {
      "AllowedHeaders": [
          "Authorization"
      ],
      "AllowedMethods": [
          "GET"
      ],
      "AllowedOrigins": [
          "*"
      ],
      "ExposeHeaders": []
  }
]
```
- **Bucket Policy** within permissions tab: Edit bucket policy
Click AWS Policy Generator (top right conrner)

Select type of policy: S3 Bucket policy
Principal: * (allows all)
Actions: Get object
Amazon Resource Name (ARN): paste from the Edit bucket policy page in permissions
Click Add statement Than Click Generate Policy and Copy the policy into bucket policy editor. 
In the policy code find "Resource" key and add "/*" after the name of the bucket to enable all
Save changes

- **Access control list (ACL)** within permissions tab: click Edit

find Everyone (public access) and check List box and save

8. Identity and Access Management (IAM)
Go back to the AWS Management Console and find IAM in AWS Services

- side menu - User Groups and click **Create Group**
name group "manage-your-app-name" and click Create group

- side menu - Policies and click **Create Policy**
Click import managed policy - find AmazonS3FullAccess
Copy ARN again and paste into "Resource" add list containint two elements "[ "arn::..", ""arn::../*]" First element is for bucket itself, second element is for all files and foldrs in the bucket

Click bottom right Add Tags, than Click bottom right Next: Review
Add name of the policy and description

Click bottom right Create policy

9. Attach policy to the group we created:
- go to User Groups on side menu
- select your group from the list
- go to permissions tab and add permissions drop down and choose **Attach policies**
- find the policy created above and click button in bottom right Add permissions

10. Create User to go in the group
- **Users** in the side menu and click add users

User name: your-app-staticfiles-user
Check option: Access key - Programmatic access
Click button at the bottom right for Next
- Add user group and add user to the group you created earlier
Click Next Tags and Next: review and Create user
- Download .csv file


11. Connect django to AWS S3 bucket
- install boto3
- install django-storages
- freeze to requirements.txt
- add storages to installed apps in settings.py

```
if 'USE_AWS' in os.environ:
    # Cache control
    AWS_S3_OBJECT_PARAMETERS = {
        'Expires': 'Thu, 31 Dec 2099 20:00:00 GMT',
        'CacheControl': 'max-age=94608000',
    }

    # Bucket Config
    AWS_STORAGE_BUCKET_NAME = os.getenv('AWS_STORAGE_BUCKET_NAME')
    AWS_S3_REGION_NAME = 'eu-west-2'
    AWS_ACCESS_KEY_ID = os.getenv('AWS_ACCESS_KEY_ID')
    AWS_SECRET_ACCESS_KEY = os.getenv('AWS_SECRET_ACCESS_KEY')
    AWS_S3_CUSTOM_DOMAIN = f'{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com'
```

12. Go to heroku to set up enviromental variables

open CSV file downloaded earlier and copy each variable into heroku Settings

AWS_STORAGE_BUCKET_NAME
AWS_ACCESS_KEY_ID from csv
AWS_SECRET_ACCESS_KEY from csv
USE_AWS = True
remove DISABLE_COLLECTSTATIC variable from heroku

13. Create file in root directory custom_storages.py

```
from django.conf import settings
from storages.backends.s3boto3 import S3Boto3Storage


class StaticStorage(S3Boto3Storage):
    location = settings.STATICFILES_LOCATION


class MediaStorage(S3Boto3Storage):
    location = settings.MEDIAFILES_LOCATION
```

14. Go to settings.py, add the AWS settings

```
    # Static and media files
    STATICFILES_STORAGE = 'custom_storages.StaticStorage'
    STATICFILES_LOCATION = 'static'
    DEFAULT_FILE_STORAGE = 'custom_storages.MediaStorage'
    MEDIAFILES_LOCATION = 'media'

    # Override static and media URLs in production
    STATIC_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/{STATICFILES_LOCATION}/'
    MEDIA_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/{MEDIAFILES_LOCATION}/'

```

15. To load the media files to S3 bucket

- Go to your S3 bucket page on AWS. Create new folder "media"
- go to the media folder and click Upload


## Credits 
### Online resources ??? check if needs to be added
* [Icons8](https://icons8.com/)
* [unsplash](https://unsplash.com/)
* [Fontawsome](https://fontawesome.com/)
* [Bootstrap 5]()
* [Markdown best practices](https://www.markdownguide.org/basic-syntax/)
* [Markdown Table of content generator](http://ecotrust-canada.github.io/markdown-toc/)

* [icon](https://www.flaticon.com/free-icons/trees)
* png to svg [converter](https://convertio.co/download/d39aa7f30e79f4379b9bce697c5afe384b5853/)
* resizing photos by [photoresizer](https://www.photoresizer.com/)
* [Tetris Game by Rosetta Code](https://rosettacode.org/wiki/Tetris/JavaScript)
* [Ping Pong Game By Code Explained](https://www.youtube.com/watch?v=nl0KXCa5pJk)

### Tutorials and inspiration

* gather app

### People

- Sean for supporting our team as a facilitator