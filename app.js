var router = require('./router.js');
// Problem: We need a simple way to look at a user's badge count and JavaScript points from a web browser
// Solution: Use node.js to perform the profile look ups and serve our templates via HTTP

// Create a web server
const http = require('http');
http.createServer(function (request, response) {
    router.home(request, response);
    router.user(request, response);
}).listen(8000);
console.log("We got the dang 'ol server runnin' on port 8000.");
