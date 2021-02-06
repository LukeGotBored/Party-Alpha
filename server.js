const Discord = require("discord.js");
const express = require("express");
const party = new Discord.Client({ disableMentions: 'everyone' });
const app = express();
require('dotenv-flow').config();

party.commands = new Discord.Collection();
party.aliases = new Discord.Collection();

require('./handlers/eventHandler')(party);
require('./handlers/moduleHandler')(party);

party.config = require('./config.js');

// function getUserFromMention(mention) {
// 	if (!mention) return;

// 	if (mention.startsWith('<@') && mention.endsWith('>')) {
// 		mention = mention.slice(2, -1);
// 		if (mention.startsWith('!')) {
// 			mention = mention.slice(1);
// 		}
// 		return client.users.get(mention);
// 	}
// }

// function getUserFromMentionRegEx(mention) {
// 	const matches = mention.match(/^<@!?(\d+)>$/);
// 	const id = matches[1];

// 	return client.users.get(id);
// }

party.login(process.env.DISCORD_BOT_TOKEN)

    app.get("/api/stats", function(req, res) {
        res.header('Access-Control-Allow-Origin', '*');
        res.json({"guilds": client.guilds.cache.size, });
    });

    const listener = app.listen(process.env.PORT, () => {
      console.log("Your app is listening on port " + listener.address().port);
    });