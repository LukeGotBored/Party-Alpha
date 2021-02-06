const { MessageEmbed } = require('discord.js');

module.exports = (party, message) => new Promise(async (resolve, reject) => {
  try {
    // Check if any credentials is found in the message
    if (message.content.includes(party.token)) resolve(true);
    else return resolve(false);

    // Delete the message if possible to prevent futher damage
    if (message.deletable) {
      message.delete().catch((e) => {
        handleError(e);
      });
    }

    // Get the owner
    let owner = await party.users.fetch('305771483865546752');
    if (!owner) {
      // If owner was not found by id get the owner by app
      const app = await party.fetchApplication();
      owner = await party.users.fetch(app.owner.id);
    }

    // Let the owner know about it
    const embed = new MessageEmbed()
      .setColor(party.colors.RED)
      .setTitle('ATTENTION!!')
      .setDescription('My token has been been exposed! Please regenerate it **ASAP** to prevent my malicious use by others.')
      .addField('Responsible user', `${message.author.tag} / ${message.author.id}`);
    return owner.send(embed);
  } catch (error) {
    return reject(error);
  }
});
