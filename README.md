
# Social Media API


## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Developer](#developer)
  
## Description
Backend for a social media website. Built with [Node.js](https://nodejs.org/en/), [Express](https://www.npmjs.com/package/express), [MongoDB](https://www.mongodb.com/try/download/community), [Mongoose](https://www.npmjs.com/package/mongoose) and [date-fns](https://www.npmjs.com/package/date-fns). Allows for creating, updating and deleting of Users, Friends, Thoughts and Reactions.
## Installation
In order to install and use this application locally, you will need to have [MongoDB](https://www.mongodb.com/try/download/community) installed.
1. Clone the GitHub repo. 
2. Navigate to the directory of the clone. 
3. Run "npm install". 
4. Run "npm start" to launch the server.
## Usage
Using an API testing tool like Insomnia Core or Postman, you can test the functionality of the backend.
Below is a list of the URLs that can be used to view (using GET), add (using POST or PUT), modify (using PUT) or remove (using DELETE) content. Anything in curly brackets ({}) is a placeholder and should be replaced with relevent information. All data is sent and received as JSON.
* GET all users http:/<span></span>/localhost:3001/api/users/ 
* GET one user by ID http:/<span></span>/localhost:3001/api/users/{UserID}
* GET all thoughts http:/<span></span>/localhost:3001/api/thoughts/
* GET one thought by ID http:/<span></span>/localhost:3001/api/users/{ThoughtID}
* POST a new user http:/<span></span>/localhost:3001/api/users. Required fields are "username" and "email"
* POST a new friend http:/<span></span>/localhost:3001/api/users/{UserID}/friends/{FriendID}
* POST a new thought http:/<span></span>/localhost:3001/api/thoughts. Required fields are "thoughtText", "username" and "userId"
* PUT a user http:/<span></span>/localhost:3001/api/users/{UserId}. Update the "username" or "email" field
* PUT a thought http:/<span></span>/localhost:3001/api/thoughts/{ThoughId}. Update the "thoughtText", "username" or "userId" field
* PUT a reaction (unlike the other PUTs, this is for adding, not modifying) http:/<span></span>/localhost:3001/api/thoughts/{ThoughtId}/reactions. Required fields are "reactionBody" and "username"
* DELETE a user http:/<span></span>/localhost:3001/api/users/{UserID}. Note this will also delete any thoughts that user has posted
* DELETE a friend http:/<span></span>/localhost:3001/api/users/{UserID}/friends/{FriendID}
* DELETE a thought http:/<span></span>/localhost:3001/api/thoughts/{ThoughId}
* DELETE a reaction http:/<span></span>/localhost:3001/api/thoughts/{ThoughtId}/reactions{ReactionId}

[Watch this video](https://www.youtube.com/watch?v=lNXYCGkb0Ls) for a demonstration of how it works. 

[![screenshot](https://i9.ytimg.com/vi/lNXYCGkb0Ls/mq2.jpg?sqp=CJS-zoMG&rs=AOn4CLCHW2johaL1lg_7Gakcmy0ZBqlD1A)](https://www.youtube.com/watch?v=lNXYCGkb0Ls)

## Developer
The Social Media API was built by Eric Normann, a student in the Full Stack Developer Coding Bootcamp at the University of Toronto.
If you have questions, please visit my [GitHub](http://github.com/e-p-n) page or [email](mailto:eric.n@me.com?subject=Question%20regarding%20Social%20Media%20API) me.
  
