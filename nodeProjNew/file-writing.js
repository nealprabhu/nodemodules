const fs = require("fs");

fs.writeFile("data.json","{'title':'test'}", (err, data) =>{
    if(err) return err;
    console.log(data)
});
