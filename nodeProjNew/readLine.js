var readlne = require("readline"); // This library will be installed when installing the node
                                //    This will provide wrapper for standard op & ip
const util =  require('util');                                
var RL = readlne.createInterface(process.stdin, process.stdout);

RL.question("Enter the name:", (name) =>{

RL.setPrompt(`${name} How old are you`); //Asking the prompt
RL.prompt();

RL.on('line',(age) =>{
    if(age<18){
      util.log(`${name} you are less than ${age}, So you cannot proceed`);
        RL.close();
    }
    else{
        util.log(`${name} you are greater than ${age}, So you can proceed`);
        RL.close();
    }
});
});
