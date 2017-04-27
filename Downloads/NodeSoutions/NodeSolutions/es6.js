/*let name=process.argv[2];
let lName=name.toLowerCase();
console.log(`Hello, ${name}!
Your name lowercased is \"${lName}\".`)*/

/*let inputs=process.argv.slice(2);

let result=inputs.map(x=>x.charAt(0))
.reduce((a,b)=>a.concat(b));
console.log(`[${(inputs)}] becomes "${(result)}"`);*/

/*var foot={

    kick:function(){

        this.yelp="Ouch!";
        setImmediate(()=>console.log(this.yelp));
    }
};

foot.kick();*/


/*var username,email, rest;
let userArray=process.argv.slice(2);

[,username,email, ...rest]=userArray

console.log(`"{ username: '${username}', email:'${email}' }"`);*/


/*let array=process.argv.slice(2);

var min=Math.min(...array);

console.log(`The minimum of [${array}] is ${min}`)
*/

/*module.exports=function average(...args){

    var sum= args.reduce((a,b)=>a+b);
    var avg=sum/args.length;

    return avg
}*/


/*module.exports=function(lBound=0, uBound=1){

    return (lBound+uBound)/2 
}*/


module.exports=(args,transform=x=>{var count=x.length
    
    for(var i=0;i<count;i++)
    {

        x=x+"!";
    }
    console.log(x);
})