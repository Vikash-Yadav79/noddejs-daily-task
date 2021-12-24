


//  Read and write file

// var fs = require('fs');
//  fs.readFile('Readme.txt','utf8',function(err,data){
//    fs.writeFile('writeMe.txt', data);
// });

// console.log('test')
// fs.writeFileSync('writeMe.txt',readMe)

// Create and Remove directories

// var fs = require('fs');
 
// fs.unlink('writeMe.txt');

// fs.mkdirSync('stuff');

// fs.rmdirSync('stuff');
// fs.mkdir('stuff',function(){

//     fs.readFile('Readme.txt','utf8',function(err,data){
//        fs.writeFile('./stuff/writeMe.txt',data);
//     });
// });

// fs.unlink('./stuff/writeMe.txt',function(){
//     fs.rmdir('stuff');
// });
// fs.rmdir('stuff');

// Clients & Servers

// var http = require('http');

// var Server = http.createServer(function(req,res){
//     console.log('request was made: ' + req,res)
//     res.writeHead(200,{'content-type':'text/plain'});
//     res.end('hey vikash');
// });

// Server.listen(3000,'127.0.0.1');
// console.log('yo dawg , now listening to port 300');

//  Readable Stream

// var http = require('http');
// var fs = require ('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

// myReadStream.on('data',function(chunk){
//     console.log('new chunk received:');
//     console.log(chunk);

// });

// Writable Stream

// var http =  require('http');
// var fs = require ('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// myReadStream.on('data',function(chunk){
//     console.log('new chunk recieved');
//     myWriteStream.write(chunk);
// });

// pipes

// var http =  require('http');
// var fs = require ('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// myReadStream.pipe(myWriteStream);


// var http =  require('http');
// var fs = require ('fs');

// var server = http.createServer(function(req,res){
//     console.log('request was made: ' + req.url);
//         res.writeHead(200,{'Content-Type': 'text/html'});
//         var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//         myReadStream.pipe(res);   
// });

// server.listen(3000,'127.0.0.1');
// console.log('yo dawgs, now listening to port 3000');



// myReadStream.pipe(myWriteStream);

// Serving JSON data

// var http =  require('http');
// var fs = require ('fs');

// var server = http.createServer(function(req,res){
//     console.log('request was made: ' + req.url);
//         res.writeHead(200,{'Content-Type': 'application/json'});
//         var myObj = {
//             name: 'vikash',
//             job: 'Engineering',
//             age: 24
//         };
//         res.end(JSON.stringify(myObj));
// });

// server.listen(3000,'127.0.0.1');
// console.log('yo dawgs, now listening to port 3000');

//Basic Routing

//  var http = require('http');
//  var fs = require('fs');


//  var server = http.createServer(function(req,res){
//      console.log('request was made: ' + req.url);
//      if(req.url ==='/home' || req.url ==='/'){
//          res.writeHead(200,{'Content-Type' : 'text/html'});
//          fs.createReadStream(__dirname + '/index.html').pipe(res);
//      }else if(req.url === '/contact'){
//          res.writeHead(200, {'Contact-Type' : 'text/html'})
//          fs.createReadStream(__dirname + '/contact.html').pipe(res);
//      } else if(req.url === '/api/ninjas'){
//          var ninjas = [{name:'vikash' , age:23},{name: 'yadav', age:23}];
//          res.writeHead(200,{'contact-type' : 'application/json'});
//          res.end(JSON.stringify(ninjas));
//      }else if(req.url === '/About'){
//         res.writeHead(200,{'contact-type' : 'text/html'});
//         fs.createReadStream(__dirname + '/About.html').pipe(res);
//      }else if(req.url === '/Login'){
//         res.writeHead(200,{'contact-type' : 'text/html'});
//         fs.createReadStream(__dirname + '/Login.html').pipe(res);
        
//       } else{
//          res.writeHead(404,{'conatct-type' : 'text/html'});
//          fs.createReadStream(__dirname + '/404.html').pipe(res);
//      }
//     //  res.writeHead(200, {'content-Type' : 'text/plain'});
//     //  res.end('feed me popcorn');
//  });
// server.listen(3000, '127.0.0.1');
// console.log('hey vikash welcome to nodejs server');

// Express 

// var express = require('express')

// var app = express();

// app.get('/',function(req,res){
//     res.send('this is the home page');
// });

// app.get('/contact',function(req,res){
//     res.send('this is the contact page');
// });
// app.get('/profile/:id' ,function(req,res){
//     res.send('you requested to see a profile with the id of' + req.params.id);
// });

// app.listen(3000);

// route parameter

// var express = require ('express');

// var app = express();


// app.get('/profile/:id', function(req,res){
//     res.send('you requested to see a profile with the id of ' + req.params.id);
// });

// app.get('/profile/:name', function(req,res){
//     res.send('you requested to see a profile with the id of ' + req.params.id);
// });

// app.listen(3000);

// template Engines

var express = require('express')

 var app = express();

 app.set('view engine', 'ejs');

 app.get('/', function(req,res){
     res.sendFile(__dirname + '/index.html');
 });

 app.get('/contact',function(req,res){
     res.sendFile(__dirname + '/contact.html')
 });
 app.get('/profile/:name',function(req,res){
     var data = {age: 23, job: 'IT'};
     res.render('profile',{person : req.params.name, data: data});
 });

 app.listen(3000);

   
