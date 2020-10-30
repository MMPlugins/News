module.exports = function({ config }) {
  const discord = require('discord.js');
  const client = new discord.Client;
  
  // now you have a discord.js client object which you can do whatever to.
  // It's better just to use eris
  
  client.login(config.token);
  };
