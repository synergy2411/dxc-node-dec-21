# Three breaks
- 11:30 to 11:50 (20 Minutes)
- 01:30 to 2:20 (50 Minutes)
- 04:00 to 04:20 (20 Minutes)

# What is JavaScript?
- Client-side (Browser) & Server-Side (NRE)
- Dynamic behaviour
- Interpreted
- Object-oriented (ES2015/ES6) / Object based (before 2015)
- Scripting Language
- Faster
- light-weight
- Single Threaded
- Asynchronous Programming : Complex Calculation, Read/Write, XHR Calls, Obtaining Sockets etc
- Non Blocking
- Event Driven Approach

# Dealing JS Async Behaviour
- Callback Functions
- Promises
- Async...Await
- Observables (RxJS : used in Angular)




MEAN Mongo Express Angular Node
MERN Mongo Express React Node
MEVN Mongo Express Vue Node

VBScript
JScript


# REPL - Read Evaluate Print Loop


# Node Global Variables
- Console
- Process
- Global
- Buffer
- Timers (setTimeout(), setInterval(), clearInterval(), setImmediate())
- __dirname, __filename

# Client side JS
document.getElementById()
window.alert()
alert() | prompt() | confirm()



# ES2015 / ES6+ features
- Arrow Functions
- Destructuring
- Spread / Rest Operator
- Template Literal
- Block Scope Variable
- Short hand property
- Default Parameter
- Classes
- Modules
- Map / Set




# Node Installer
- Node Core/Native Modules
- Node runtime Environment (NRE)
- Node Package Manager (NPM)



# Module System
- AMD
- SystemJS
- RequireJS
- ES6 Module : import Statement / export keyword
- CommonJS Module System
    : to export - module.exports variable
    : to import - require()


- NPM
- NRE
- Core Module

- NodeJS ecosystems (NPM, npm commands, package.json, events, streams)
- Express (REST API)
- MongoDB / Mongoose (ORM)


# Generating the package.json file
> npm init
> npm i chalk@4 yargs@latest

# Useful NPM Commands :
> npm init [-y]
> npm install chalk
> npm install typescript [-D] / [-g]
> npm uninstall chalk
> npm ls [-g] [--depth 0]
> npm config set
> npm adduser
> npm publish
> npm outdated
> npm update


# REST API (REpresentational State Transfer)
- GET           /expenses       - returns all expenses
- POST          /expenses       - create new expenses
- GET           /expenses/:id   - returns one expense based upon ID
- PATCH         /expenses/:id   - update the exisitng expenses based upon the ID
- DELETE        /expenses/:id   - delete one expense based upon ID


> npm i nodemon -g
> nodemon index.js



- Express (REST API)
- MongoDB (Mongoose)
- Template Engine (SSR)
- JWT (Authentication)
- Testing (Mocha, Chai)

- Deployment (AWS/Heroku)
- Microservices


# Mongo Commands
- show dbs
- use dxcDB
- db.createCollection("todos")
- db.todos.insertOne({label : "to buy new jeans", status : false})
- db.todos.find()


- npm init -y
- npm install express mongoose