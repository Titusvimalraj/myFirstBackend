# myFirstBackend
Real Time to do list back end

Project Description – realtimetodolist.info

Titus vimal raj | titusvimalraj@gmail.com| 8610265950

Requirement

The requirement of this project was to create a web application for to do lists which would have real time notifications and features. The project was also supposed to be hosted in AWS cloud.

Technologies used:

Frontend Technologies - HTML5, CSS3, JS, Bootstrap and Angular

Backend Technologies - NodeJS, ExpressJS and Socket.IO

Database – MongoDB

Notable npm packages: nodemailer, aws-sdk

Hosting: AWS (EC2, S3, Route 53)

Application features

	The application has the following features listed below in points:
  
  
•	There is a login feature for users to login for customised view of their lists.

•	The to do lists of a user in user’s list dashboard which also has headers with notifications, friend requests, find friends and user actions along with user dropdown including profile, friend list and log out.

•	There is send friend requests and accept friend requests to add new friends to user’s friend list.

•	The to do list actions can be restored by clicking on undo button, user can also undo actions of friends by visiting the friend’s recent activity, there is also undo functionality with ctrl + z keyboard command which has some limitations.

•	The user is served with notifications at real time when any updates occur.

•	The password reset sends a link through nodemailer to user’s email

Additional features:

	This project was decided to be made fully responsive hence the design was made with 
  mobile first approach concept.
  The website is fully responsive at mobile resolutions as well, also there is a file upload feature 
  which was established using AWS SDK.
  It’s to demonstrate the application can take file uploads maximum six of 50mb. 
  
It is coded to accept only JSON file in the following format:
  
{

  listId : "LFUvfpEoi",

	userId: "FDCo8D3Ef",
  
	itemId: "kwFzxGCcS"
  
}

Assumptions:

1.	The user will use undo through keyboard command only for undoing the last actions.

2.	The user is familiar with social media applications such as Facebook, twitter etc since the design is inspired from those websites.

3.	The user will use file upload to just save his list details in JSON format in the server which will not be accessible later and stays for internal purposes.

4.	The user logs into the application with one instance at once or else the earlier version of the client session is timeout.

5.	The user can only add friends and not delete or remove them after adding.


Instructions:

The uri for front end is www.realtimetodolist.info

The uri for back end is api.realtimetodolist.info

The uri for documentation is apidoc.realtimetodolist.info

(only includes the routes of api counterpart since events are the same action and also due to lengthy documentation)

The secret key has to be stored in database hence it remains to the host admin to create a key value pair in the database as db.globalconfigs.insertOne({secretKey:”theSceretKeyYouLike”})

Refer documentations of Aws for credentials setup and also mongodb for database actions, socket.io documentation for events, nodemailer documentation for setting up with gmail.

Git hub repositories

Frontend: https://github.com/Titusvimalraj/realTimeToDoListFrontend.git

Backend: https://github.com/Titusvimalraj/myFirstBackend.git


Acknowledgement:

Sincere thanks to Mr. Aditya Kumar (CTO, ediwsor.com) and edwisor for providing a very good content for learning. Thanks to edwisor for providing the problem statement and also thanks to development communities out there stackoverflow, redit, github who help in understanding queries raised at instant without them this wouldn’t have been possible.


Note: some of the code for authentication and socket have been utilized from the learning content at edwisor.

Also the background image is owned by shutter stock and it is utilised solely for individual and learning purpose not for any commercial reason.
