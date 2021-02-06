const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "amongus",
  description: "orange is sus",
  guildOnly: false,
  

  execute(message, args) {
    const tick = message.client.emojis.cache.get("655807079784644608").toString()
    const cross = message.client.emojis.cache.get("655807081240330245").toString()
    let randomStatus = "none";
    var status = [
      "Impostor ",
      "Crewmate",
    ];
    
    var image = "https://cdn.glitch.com/76b98dfe-b6a5-425a-bd10-be07af6b4014%2Fshh.png?v=1601326369104"
    randomStatus = status[Math.floor(Math.random() * status.length)];
    
    let predemb = new Discord.MessageEmbed()
        .setColor("0xfeb637")
        .setTitle("<:crewmate:760249811105611836>  Shhhhhhh!")
        .setDescription("Click here to reveal your role: ||**" + randomStatus + "**||")
        .setImage(image)
        .setTimestamp()
        .setFooter("Party!", "https://i.imgur.com/B6QKBgC.png");
    
    message.channel.send(predemb);
  }
};
