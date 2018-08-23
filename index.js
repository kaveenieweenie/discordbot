const Discord = require("discord.js"); // Assigns a variable to the API making it much faster to use
const Client = new Discord.Client(); // Assigns a varible to the Discord.Client, the Client that we are referencing is the Bots Account
const prefix = "`"; // We assign a variable here, this variable will later be used in our first message check to refine which messages the bot will respond too


Client.on("ready", ()=>{ 
    console.log("bot is online");



})
// ^^^ This code triggers when the bot starts up, used for any sort of boot up code that needs to be completed ^^^



Client.on("message", (message)=>{
    if(!message.content.startsWith(prefix)) return;

        if(message.content.startsWith(prefix + "help")) {
            //message.channel.send(   `Start all commands with ${prefix} \n       help\n      More to come`);
             message.channel.send("```A tool used to start a voting poll \n\ \n\  Commands:\n\  help     Shows this text\n\  more to come after more developement\n\```");
        

        }
        if(message.content.startsWith(prefix + "newpoll")) {
            if(message.member.roles.find("name", "pollmaster")){
                console.log("It's Checking Properly")
            }
        }


})
// ^^^ When the bot reads a message anywhere, DMs, or any channel. We can add further checks to refine the detection to only DMs for example ^^^




Client.login("NDgyMjM2ODM4MDc0MTIyMjQy.DmB__w.4cnJiNPfnIcCMqr4CDc5vw2Rs1M"); // Logs the code into the Bot's Account

function newFunction() {
    return "label";
}