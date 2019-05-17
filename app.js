console.log("Starting NOTE App");

const fs=require("fs");
const yg=require("yargs");
const cd=require("./commands.js");

var input=yg.argv;
var command=input._[0];

console.log("Your Command: ",command);

if(command==="Add")
{
    cd.Add(input.title,input.body);
}



