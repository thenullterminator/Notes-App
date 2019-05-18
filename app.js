console.log("Starting NOTE App");

const fs=require("fs");
const yg=require("yargs");
const cd=require("./commands.js");

var titleop={
    describe:"title of node",
    demand:true,
    alias:'t'
};

var input=yg
.command('list',"list all the existing notes")
.command("remove","remove a existing node",{
    title:titleop
})
.command("read","read a existing node",{
    title:titleop
})
.command("add","add a new existing node",{
    title:titleop,
    body:{
        describe:"body of new node",
        demand:true,
        alias:'b'
    },
        
})
.argv;
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



