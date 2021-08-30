// Express JS Crash Course //
// https://www.youtube.com/watch?v=L72fhGm1tfE

// web framework for node.js
// unopinionated - not a high level framework
// minimalist

// server-side / backend framework

// render views w/ express w/ handlebars or pug

// node.js web apps become easier
// used for both server rendered apps as well as API and microservices
// light, fast, free; most popular
// full control of request and response
// great to use w/ client-side frameworks and JS

// basic knowledge of JS, Node.js, NPM
// HTTP Status Codes
// JSON
// High order array methods, forEach, map, filter
// Arrow functions, PROMISES PROMISES

// BASIC WEB SERVER SYNTAX //

// can't use with IMPORT feature from es2015 modules to import just yet
// use bible to compile or use this syntax
//// const express = require("express");

// init express
// set a variable to express method, called app
//// const app = express();

// endpoints, route handlers
// accept get request to index route (which is slash)
// callback request, response
//// app.get("/", function(req, res) {
//     res.send("Hello World");
// });

// listen on port
// local host port 3000
//// app.listen(3000);

// BASIC ROUTE HANDLING //

// fetch data from db
// use mongodb
// use postgres, mysql
// load pages, return json data
// full access to req, res

// request object represents http request properties for url params, query strings, data sent within body, http headers
// create middleware, where you can change or add things to req object

// response object represents http response
// up to you to use object to send back json data, redirect, render template, etc

// parse incoming data with body parser that's included w/ express

// store routes in separate files and store them to keep application clean

// MIDDLEWARE //

// functions that have access to request and response objects
// execute any code
// make changes to req/res objects
// ending response cycle
// call next middleware in stack; next()

// STARTING //
// node.js
// express version 4.x.x, version 5 in alpha
// postman http client to make requests to server*
// get put post delete requests

// npm init -y
// create package.json file
// npm i express
// added to package.json
// index.js (main entry point file, maybe server.js)
// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 3000;
// when we deploy, the server isn't going to run it on the port, so the server will check environment var first
// app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
// server will run
// node filename.js or node filename (run it)
// cannot get /
// / is route for index page, can't find a route handler for this slash
// haven't created any routes or endpoints
// to create a route use app.TYPEOFREQUESTWEWANTOHANDLE
// app.get("/", function(req, res){
//    etc
//})
// or this syntax
// app.get("/", (req,res) => {
//    res.send(`HELLO AND STUFF OR HTML GOES IN HERE IDK`);
// })
// don't forget to restart server lol
// nodemon will constantly watch server so we don't have to keep reloading
// npm install -D nodemon
// package.json
// create script
// "start": "node index"
// "dev": "nodemon index"
// nodemon will constantly watch
// save and run npm run dev
// server is now listening on whatever port you specified

// SET A STATIC FOLDER //
// app.use(express.static(path.join(__dirname, "public")));