//import export questions practise krna hai isme

const logger = require("./index");

logger.logger.on("log", function(args){
  console.log("Event Handled ", args)
})
logger.logger.log();