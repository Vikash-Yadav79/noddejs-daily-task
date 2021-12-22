
// const http = require ("http");
//  http.createServer(function(req,res){
// res.write("welcome to nodejs ");
// res.end();
// }).listen(3000);

const { EventEmitter } = require("stream")

// module export

// const other = require('./other');
// console.log(other())

// create server from express

// const express = require ('express')
// const app = express();
// app.get("/", function (req,res){
//     res.send("Hello from Vikash")
// }).listen(4500);


// Global Objects in Nodejs
// console.log("Hello Global Objects");
// setTimeout(function(){
//     console.log("hello World");
// },3000);

// setInterval(function(){
//     console.log("Hello Vikash");
// },2000)

// var time = 0;
// var timer = setInterval(function(){
//     time += 2;
//     console.log(time +   'seconds have passed ');
//     if (time > 5){
//         clearInterval(timer);
//     }
// },2000);

// console.log(__dirname);
// console.log(__filename);


// Function Expression

// var sayBye = function(){
//     console.log('bye');
// }
// sayBye();

// function callFunction(fun){
//     fun();
// };
// callFunction(sayBye);

// module

// var stuff = require('./stuff');

// console.log(stuff.counter(['vikash', 'yadav','varanasi']));
// console.log(stuff.adder(5,6));
// console.log(stuff.adder(stuff.pi, 5));

// Node EventEmitter

// var events = require('events');
 
// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent',function(mssg){
//     console.log(mssg);
// });

// myEmitter.emit('someEvent', 'the event was emitted');


var events = require ('events');
var util = require('util');

var person = function(name){
    this.name = name;
};

util.inherits(person,events.EventEmitter);

var james = new person('james');
var Vikash= new person('Vikash');
var Yadav = new person('Yadav');
var people = [Vikash,james,Yadav];

people.forEach(function(person){
    person.once('speak', function(mssg){
       console.log (person.name  +  'said'  +  mssg);
    })
});

james.emit('speak' , 'hey dude');
Vikash.emit('speak' , 'hey buddy');
Yadav.emit('speak' , 'Samjhwadi party jindabad');