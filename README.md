This is a backend project to demonstrate my understanding of the concepts learned in this module. 

Those concepts include:
    Managing Packages with NPM
    Basic Node and Express
    MongoDB and Mongoose

##To CREATE (POST) a new user
Add a username in the 'create new user' form. 
This will post the form data 'username' to 'localhost:3000/api/exercise/new-user'
Returned on the screen will be a JSON with username and _id
If the username is already taken, a JSON will be displayed that says {"message":"username is already taken"}

##To RETRIEVE (GET) a JSON of all users 
In the address bar, go to 'localhost:3000/api/exercise/users' and returned will be a JSON with all of the users having both a username key as well as _id

##To ADD (POST) an exercise
Copy the _id that was given when the username was created.
In the 'Add exercises' form, use the _id as the userId.
The fields marked with an asterix (*) are required.
The date form is optional, and will default to todays date if nothing is entered.
Upon submitting the form data, returned will be a JSON of the user with the description, duration, and date.

##To RETRIEVE (GET) a JSON with the full exercise log of any user
In the address bar, go to 'localhost:3000/api/exercise/log', with a parameter of userId(_id).
Returned will be the user object with added array log and count. 
Count is the total exercise count for that user.

##To RETRIEVE a JSON with part of a log of any user
In the address bar, go to 'localhost:3000/api/exercise/userlog'.
You can use the optional parameters of 'from' & 'to' to specify a date range.
Date format yyyy-mm-dd
You can also use the optional 'limit' parameter.
limit must be an integer.


Created by Pamela Augustine

