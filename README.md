# Minecraft AFK Bot

This is a simple **Minecraft bot** built using the **mineflayer** library. The bot can automatically join a Minecraft server, stay active by preventing AFK kicks, and respond to private messages from players. It can also be extended to perform additional tasks like mining diamonds for players who request it.

## Features

- **Anti-AFK**: The bot automatically performs actions (such as jumping) to stay active and prevent being kicked for inactivity.
- **Responds to Private Messages**: The bot listens for `/msg` commands and can respond by performing tasks like mining diamonds for the player who requested it.
- **Simple Setup**: Easy to configure and run with just a few steps.
- **Extendable**: You can customize the bot’s actions or add new features to suit your needs.

## Requirements

Before running the bot, you will need:

- **Node.js**: Install [Node.js] (version 14 or higher).
- **Minecraft Server**: A Minecraft Java Edition server to connect to.
- **Java**: Ensure you have the latest version of Java to run the Minecraft server.

## Installation

Follow these steps to set up the bot.

### 1. Install Node.js

If you don't have Node.js installed, download and install it 

2. Install Dependencies
   Create a folder for your project and navigate to it in your terminal.
3. Create the Bot Script
Create a new JavaScript file, e.g., afkBot.js, in your project folder and use the above code i.e afkbot.js
4. Run the Bot
To run the bot, simply execute the following command in your terminal:
node afkBot.js
5. Customize the Bot
Server Address: Change the host in the bot configuration to match the address of your Minecraft server.
Username: Modify the bot's username by changing the username field.
Minecraft Version: If you're using a different Minecraft version, update the version field.
Usage
Once the bot is running:

The bot will automatically stay active and prevent AFK kicks by jumping every 60 seconds.
If another player sends the bot a message with the phrase "mine diamonds", the bot will respond by chatting a confirmation message. (You can extend the bot's functionality to actually mine diamonds or perform other tasks.)

####Credits
Mineflayer: The bot uses the Mineflayer library to interact with Minecraft.


    
   


