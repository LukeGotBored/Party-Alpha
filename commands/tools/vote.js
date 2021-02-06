const Discord = require("discord.js");

module.exports = {
  name: "vote",
  description: "Support the developement of Party!",
  guildOnly: false,
  aliases: ["donate"],
  

  execute(message, args) {
    const voteemb = new Discord.MessageEmbed()
      .setTitle("🔔 Support Party's Development!")
      .addField("By voting you can help us at making Party better!", "** **")
      .addField(
        "➤ top.gg",
        "[Vote!](https://top.gg/bot/527625435128004628/vote)",
        true,
      )
      .addField(
          "➤ bots for discord",
          "[Vote!](https://botsfordiscord.com/bot/527625435128004628/vote)",
          true,
      )
      .addField(
          "➤ botlist.space",
          "[Vote!](https://botlist.space/bot/527625435128004628/upvote)",
          true,
      )
      .setColor(0xfeb637)
      .setTimestamp()
      .setFooter("Party!", "https://i.imgur.com/B6QKBgC.png")
      .setImage(
        "https://cdn.glitch.com/76b98dfe-b6a5-425a-bd10-be07af6b4014%2Fezgif.com-gif-maker.gif?v=1612626098666",
        true
      );
    message.channel.send(voteemb);
  }
};
