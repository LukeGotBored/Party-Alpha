const Discord = require("discord.js");
const fetch = require("node-fetch");
const Canvas = require("canvas");

module.exports = {
  name: "jpeg",
  description: "needs more jpeg",
  guildOnly: false,
  aliases: [],

  async execute(message, args) {
    const user = message.client.util.getUser(message, args.join(" "));
    const canvas = Canvas.createCanvas(512, 512);
    const ctx = canvas.getContext("2d");

    const avatar = await Canvas.loadImage(user.displayAvatarURL({size: 1024, format: "png"}));
    ctx.drawImage(avatar, 0, 0, canvas.height, canvas.width);

    const jpegged = canvas.toBuffer("image/jpeg", { quality: 0.03 });

    const attachment = new Discord.MessageAttachment(
      jpegged,
      user.username + "_jpeg.jpeg"
    );

    message.channel.send(attachment);
  }
};
