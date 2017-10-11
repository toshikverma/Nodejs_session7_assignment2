var http=require('http');
function isEven(n){

    if(n%2==0)
    return "even";

    return "odd";


}
var result="This Number is "+isEven(7); // checking is number is even or odd
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/plain'}); //setting up headers

res.end(result); //displaying in html body

}).listen(1331,'127.0.0.1');
console.log(result); // displaying in console