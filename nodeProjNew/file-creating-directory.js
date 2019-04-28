const fs = require("fs");

fs.mkdir("views",(err)=>{
  if(err) return err;
  fs.writeFile("./views/newDir.html","This is the new directory",(err)=>{
      if(err) return err;
      console.log("File has been created & data in been entered")
  })
});