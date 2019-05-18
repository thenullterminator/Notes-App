console.log("Starting NOTE App");

const fs=require("fs");
const yg=require("yargs");
const cd=require("./commands.js");


var input=yg.argv;
var command=input._[0];

console.log("Your Command: ",command);

if(command==="add")
{
    var currentnote=cd.Add(input.title,input.body);
    if(currentnote==undefined)
    console.log("Node already exist");
    else
    {
        console.log("Node Created");
        console.log("Title: ",currentnote.title);
        console.log("Body: ",currentnote.body);
    }
}
else if(command === "remove")
{
    var result=cd.remove(input.title);

    console.log(result===1? "Note is removed" : "Note not found");

}
else if(command==="read")
{
    var result=cd.read(input.title);
    if(result)
    console.log(result);
    else
    console.log("Note not present.");
}
else if(command==="list")
{
    var result=cd.list();

    result.forEach((note) => {
        console.log("Title: ",note.title);
        console.log("Body: ",note.body);
    });
}



