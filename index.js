module.exports = function({ config }) {
  const DJS = require('discord.js');
  const pluginsConfig = require('../../plugins.config.json');
  const client = new DJS.Client()
  // now you have a discord.js client object which you can do whatever to.
  // It's better just to use eris
  
  client.login(config.token);
  };
