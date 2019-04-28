const events = require("events"); //This is to create the custon event 

let emitter  =  new events.EventEmitter();

emitter.on('Custom', (message) => {
    console.log(`Message: ${message}`);
});

emitter.emit('Custom','Hello this is prabhu');
