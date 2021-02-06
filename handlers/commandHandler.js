const { MessageEmbed } = require('discord.js');


const cooldown = new Set();
const cdseconds = 5;
const prefix = 'p!'

// TODO important! check if anything in here needs fetch

module.exports = async (party, message) => {
  try {
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(2).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = party.commands.get(command) // || party.commands.get(party.aliases.get(command));
    
    if (!cmd) return;

    if (cooldown.has(message.author.id)) return;

    const isSuccessRun = await cmd.run(party, message, args);

    if (isSuccessRun) {
      if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== party.config.owner) {
        cooldown.add(message.author.id);

        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, cdseconds * 1000);
      }
    }
  } catch (error) {
    console.log('Whoops! There was an error!' + error.stack)
  }
};
