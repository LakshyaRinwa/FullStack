// const emit = require("./app");

// const EventEmiiter = require("events");  // returns eventEmitter class

// //class ka koi bhi varible bnayebge usey capls mein rkhna hai first letter

// const emitter = new EventEmiiter();

// // emitter.addListener or emitter.on  for listening handling events



// emitter.emit("logged", {username : "lakshya"});  //for raising an event

// module.exports = {
//     emitter,
//     emit
// }

const EventEmitter = require("events");

class Logger extends EventEmitter{

    log(){
        console.log("Event Emiited");
        this.emit("log" , {id: 5030, username:"lakshya"});
    }

}

const logger = new Logger();

module.exports = {logger};