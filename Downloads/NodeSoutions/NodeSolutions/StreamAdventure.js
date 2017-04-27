/*
var fs=require("fs");

fs.createReadStream(process.argv[2]).pipe(process.stdout);
*/

//process.stdin.pipe(process.stdout);

var through=require("through2");

/*
var stream=through(write,end);

process.stdin.pipe(stream).pipe(process.stdout);




function write(buffer, encoding, next){
    
   this.push(buffer.toString().toUpperCase());
    next();
    
    
}


function end(done){
    
    done();
}
*/

/*var split=require("split");

var i=1;
process.stdin.pipe(split()).pipe(through(write)).pipe(process.stdout);


function write(line,_,next){
   (i%2)? this.push(line.toString().toLowerCase()+'\n'): this.push(line.toString().toUpperCase()+'\n');
          i++;  
            next();   
    
}*/


/*var concat=require('concat-stream')

var space='';
process.stdin.pipe(concat(function(buff){
    var str=buff.toString().split(space).reverse().join(space);
    
    console.log(str);
}))*/


/*var http=require('http');
var server=http.createServer(function(req,res){
    if(req.method === "POST"){
        req.pipe(through(function(buff, _,next){
            this.push(buff.toString().toUpperCase());
            next();
        })).pipe(res);
        
    }
    else res.end('Send me a post \n');
});

server.listen(parseInt(process.argv[2]));*/


/*var request=require('request')

var r=request.post("http://localhost:8099");

process.stdin.pipe(r).pipe(process.stdout);*/


/*
var fs=require("fs");
var ws=require("websocket-stream");

var stream=ws("ws://localhost:8099");

stream.write("hello\n");*/


var trumpet=require("trumpet")

var tr=trumpet();

var stream=tr.select('.loud').createStream();

stream.pipe(through(function(buff,_,next){
    this.push(buff.toString().toUpperCase())
    next();
})).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout)