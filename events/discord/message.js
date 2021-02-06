const handleCommand = require('../../handlers/commandHandler');
const credentialsFilter = require('../../filters/credentialsFilter');

module.exports = async (party, message) => {
    try {
        /* Filter bots credentials from the message */
        if (await credentialsFilter(party, message)) return;
    
        /* If the message author is a bot ignore it */
        if (message.author.bot) return;
    
        if (message.guild) {
            handleCommand(party, message);
        }
    } catch (error) {
        console.log('Whoops! There was an error running a command!' + error.stack)
    }
}