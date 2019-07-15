const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("600432476967665673")
setInterval(function() {
channel.send(`Free Cridet XD XD XD XD`);
}, 30)
})

client.login(process.env.BOT_TOKEN);