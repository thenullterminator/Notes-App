const fs=require("fs");
const _=require("lodash");

function fetchnotes()
{
    var allnotes=[];
    try
    {
        allnotes=JSON.parse(fs.readFileSync("./notes-data.json"));
    }
    catch(e){}

    return allnotes;
}

function savenotes(allnotes)
{
    fs.writeFileSync("./notes-data.json",JSON.stringify(allnotes));
}



var Add=(title,body)=>{

    var currentnote={
        title:title,
        body:body
    };

    var allnotes=fetchnotes();
    

    var dupnotes=allnotes.filter((currentnote)=>currentnote.title===title);

    if(dupnotes.length===0)
    {
        allnotes.push(currentnote);
        savenotes(allnotes);
        return currentnote;
    }
};


var remove=(title)=>{

    var allnotes=fetchnotes();
    
    allnotes=_.remove(allnotes,(notes)=>{
        return notes.title!=title;
    });
    savenotes(allnotes);
};


module.exports={
    Add:Add,
    remove:remove
}