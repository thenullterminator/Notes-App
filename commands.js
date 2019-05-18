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
    
    var fallnotes=allnotes.filter((note)=> note.title!==title);
    savenotes(fallnotes);

    if(fallnotes.length === allnotes.length)
    return 0;
    else
    return 1;

};


var read=(title)=>{

    var allnotes=fetchnotes();
    var fnotes=allnotes.filter((note)=> note.title===title);
    if(fnotes.length!==0)
    return fnotes[0].body;
};

var list=()=>{
 return fetchnotes();
};

module.exports={
    Add:Add,
    remove:remove,
    read:read,
    list:list
}