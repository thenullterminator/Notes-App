const fs=require("fs");


var Add=(title,body)=>{

    var currentnote={
        title:title,
        body:body
    };

    var allnotes=[];
    try
    {
        allnotes=JSON.parse(fs.readFileSync("./notes-data.json"));
    }
    catch(e){}

    var dupnotes=allnotes.filter((currentnote)=>currentnote.title===title);

    if(dupnotes.length===0)
    {
        allnotes.push(currentnote);
        fs.writeFileSync("./notes-data.json",JSON.stringify(allnotes));
    }
};