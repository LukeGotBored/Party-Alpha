const fs = require('fs');
const path = require('path');
const color = require('chalk');

module.exports = (party) => {
  const eventPaths = fs.readdirSync('./events/')
    .filter((file) => fs.statSync(path.resolve('./events/', file)).isDirectory());

  for (const eventPath of eventPaths) {
    const eventFiles = fs.readdirSync(`./events/${eventPath}`)
      .filter((file) => !fs.statSync(path.resolve('./events/', eventPath, file)).isDirectory())
      .filter((file) => file.endsWith('.js'));

    for (let event of eventFiles) {
      event = event.replace(/\.js$/i, '');
      process.stdout.write(`${color.cyan('[party]:')} Loading ${event} event...\n`);

      const evt = require(`../events/${eventPath}/${event}`);

      party.on(event, evt.bind(null, party));

      if (process.stdout.moveCursor && process.stdout.clearLine) {
        process.stdout.moveCursor(0, -1);
        process.stdout.clearLine();
      }
    }
  }
};
