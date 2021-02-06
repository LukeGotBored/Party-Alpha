const Discord = require("discord.js");
const Canvas = require("canvas");

module.exports = {
  name: "jail",
  description: "bad boy!",
  guildOnly: false,
  aliases: ["prison"],

  async execute(message, args) {
    const user = message.client.util.getUser(message, args.join(" "))
    const canvas = Canvas.createCanvas(512, 512);
    const ctx = canvas.getContext("2d");
    
    
    ctx.fillStyle = "#FFFFFF"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    
    const avatar = await Canvas.loadImage(user.displayAvatarURL({size: 1024, format: "png"}));
    ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);

    const overlay = await Canvas.loadImage(
      "https://cdn.glitch.com/ef1e949e-b46b-494b-b247-f5204ca69a84%2Fbars_overlay.png?v=1581026977827"
    );
    ctx.drawImage(overlay, 0, 0, canvas.width, canvas.height);

    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      user.username + "_jailed.png"
    );

    message.channel.send(attachment);
  }
};
