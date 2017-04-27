'use strict';
require('es6-promise');



/*let  promise=new Promise((fulfill, reject)=>{



//setTimeout(function(){
   // reject(new Error("REJECTED!"));
//},300);

//fulfill("I FIRED")

//reject(new Error("I DID NOT FIRE"))

fulfill("PROMISE VALUE")



});*/



function onReject(error)
{

console.log(error.message);

}

/*
promise.then(console.log,
onReject

);*/

//console.log("MAIN PROGRAM")

/*let promise=Promise.resolve("Resolved");

let promise2=Promise.reject(new Error("rejected"));

promise.then(console.log)

promise2.catch(onReject);*/


/*first().then(function(data){
    return second(data)
}).then(console.log)*/


/*function attachTitle(name){

    return "DR." +" "+name;
}

let promise=Promise.resolve("MANHATTAN");

promise.then(attachTitle).then(console.log)*/


/*var parsePromised=function(json){

    try{

      var obj  = JSON.parse(json);
        
        return Promise.resolve(obj);

       }catch(e){

              return   Promise.reject(e);
                }
    
                
        };


parsePromised(process.argv[2]).then(console.log).then(null,console.log);
*/



/*

var Q=require('q');

function alwaysThrows(){
    
    return Promise.reject(new Error("OH NOES"));

}


function iterate(arg){

    console.log(arg);
    arg=arg+1;
    return Promise.resolve(arg);
}


Q.fcall(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(function(error){
    console.log(error.message);
}).done();
*/


/*function all(promise1, promise2)
{
   return  new Promise((fulfill, reject)=>{

       var counter=0;
        var arr=[];


        function markAsResolved(index,result){
            counter++
            arr[index]=result;

            //console.log(arr);
            if(counter===2){
            fulfill(arr);
            }

        }

promise1.then(function(data){
      markAsResolved(0,data); 
 })

  promise2.then(function(data){
       markAsResolved(1,data);
})
       
   
});

};
all(getPromise1(),getPromise2()).then(console.log);

*/





var http=require('q-io');

http.read().then(console.log);