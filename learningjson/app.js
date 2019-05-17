console.log("Starting json");

const fs =require("fs");
var object=
{
    name:"DJ",
    age:"25",
    mob:239029,
    Add:"Nashik"
};

var objectjson=JSON.stringify(object);
// console.log(objectjson);

fs.writeFileSync("./input.json",objectjson);

var output =fs.readFileSync("./input.json");
var outputobject=JSON.parse(output);
console.log(outputobject.Add);