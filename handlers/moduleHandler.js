const fs = require('fs');
const path = require('path');
const color = require('chalk');

module.exports = (party) => {
  const modules = fs.readdirSync('./commands/').filter((file) => fs.statSync(path.join('./commands/', file)).isDirectory());

  for (const module of modules) {
    process.stdout.write(`${color.cyan('[party]:')} Loading ${module} module...\n`);

    const commandFiles = fs.readdirSync(path.resolve(`./commands/${module}`))
      .filter((file) => !fs.statSync(path.resolve('./commands/', module, file)).isDirectory())
      .filter((file) => file.endsWith('.js'));

    for (let file of commandFiles) {
      file = file.substr(0, file.length - 3);
      process.stdout.write(`${color.cyan('[party]:')} Loading ${file} command...\n`);

      file = require(`../commands/${module}/${file}`);

      file.config.module = module;

      party.commands.set(file.help.name.toLowerCase(), file);

      for (const alias of file.config.aliases) {
        party.aliases.set(alias.toLowerCase(), file.help.name);
      }

      if (process.stdout.moveCursor && process.stdout.clearLine) {
        process.stdout.moveCursor(0, -1);
        process.stdout.clearLine();
      }
    }

    if (process.stdout.moveCursor && process.stdout.clearLine) {
      process.stdout.moveCursor(0, -1);
      process.stdout.clearLine();
    }
  }
};
