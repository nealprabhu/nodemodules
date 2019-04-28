const fs = require("fs");

// fs.readdir(".",(err,res)=>{
//     if(err) return err;
//     console .log(res);  
// });

fs.readFile("test.json", (err,res)=>{
    if(err) return err;

    console .log(res);   
})