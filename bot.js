const fs = require("fs")
const Discord = require("discord.js");
const client = new Discord.Client();


// Set the prefix
let prefix = "m!";
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
  
});

client.user.setActivity("WORK IN PROGRESS"); 
client.login("NDc5Nzg4Njc1OTMzMTQzMDQx.Dmx6mg.MtxyMLW6_wPlYJG0e9qeWyX6mZg");
