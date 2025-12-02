const mineflayer = require('mineflayer');

// Configuration for the bot
const bot = mineflayer.createBot({
  host: 'cracked-attack.aternos.me', // replace with your server's address
  port: 39534, // default Minecraft port
  username: 'Amar_Schlecken', // replace with your bot's username
  password: 'yourpassword', // optional, only if required
  version: '1.20.1', // replace with the server's version
});

bot.once('spawn', () => {
  console.log('Bot has joined the server and is now AFK.');

  // Optional: Announce bot's presence in chat
  bot.chat('Hello! I am here to stay AFK.');

  // Look around occasionally to avoid being kicked for inactivity
  setInterval(() => {
    bot.look(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2);
  }, 60000); // every minute
});

// Respond to chat messages
bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  bot.chat(`Hello ${username}, I am AFK.`);
});

// Handle disconnection
bot.on('end', () => {
  console.log('Bot has been disconnected.');
});

