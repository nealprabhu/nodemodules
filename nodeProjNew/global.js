const req =  require("path");

var name = "prabhu";
var newName = name.toUpperCase();
global.console.log(`${newName}`);
console.log(req.basename(__filename)); //  basename will remove the basepath and only dissplay the only path(global.js)
 