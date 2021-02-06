const COLOR = require('chalk');

module.exports = async (party) => {
  try {

 const bootTime = Math.round(process.uptime() * 1000);

    // TODO create log handler for color

    console.log(COLOR`\n{cyan [${party.user.username}]:} I'm completely ready to go\n`);

    console.log(COLOR`{green [  SERVERS]:} ${party.guilds.cache.size}`);
    console.log(COLOR`{green [   PREFIX]:} p!`);
    console.log(COLOR`{green [BOOT TIME]:} ${bootTime}ms`);
  } catch (error) {
    console.log('Whoops! There was an error!' + error.stack)
  }
};
