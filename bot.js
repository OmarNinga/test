﻿const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("605904647965900814")
setInterval(function() {
channel.send(`omar omar omaz omar omar`);
}, 30)
})

client.login(process.env.BOT_TOKEN);