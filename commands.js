const fs=require("fs");


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

    allnotes=fetchnotes();
    

    var dupnotes=allnotes.filter((currentnote)=>currentnote.title===title);

    if(dupnotes.length===0)
    {
        allnotes.push(currentnote);
        savenotes(allnotes);
        return currentnote;
    }
};



module.exports={
    Add:Add
}