
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);

    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cats") {
         fs.readFile('views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/cars/new") {
        fs.readFile('views/new_car.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
   }
    else if (request.url === "/css") {
        fs.readFile('stylesheets/css.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/car1") {
        fs.readFile('images/car1.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/car2") {
        fs.readFile('images/car2.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
   }
    else if (request.url === "/cat1") {
        fs.readFile('images/cat1.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cat2") {
        fs.readFile('images/cat2.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }

    else {
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");
