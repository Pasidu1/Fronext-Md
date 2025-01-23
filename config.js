const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=2j5ESKoB#MJZ7fhSZOMKCC9b3WRqq94f4gljxebg6723oaY281BI",
ALIVE_IMG: procesess.env.ALIVE_IMG || "https://i.ibb.co/hY5RLdr/7471.jpg" 
ALIVE_MSG: procesess.env.ALIVE_IMG || "Hello am cyber froly Matrix team member I am alive now👋",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true"   
};
