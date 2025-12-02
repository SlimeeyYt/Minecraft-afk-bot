# Minecraft AFK Bot

This project is a simple Minecraft bot built using the mineflayer library. The bot can automatically join a Minecraft server, stay active to avoid AFK kicks, and respond to private messages from players. It can also be extended to perform tasks such as mining diamonds or any other custom automation you choose.

## 🚀 Features

🛡 Anti-AFK System
The bot performs periodic actions (like jumping) to prevent being kicked for inactivity.

💬 Responds to Private Messages
Listens for /msg commands and can respond with programmed actions (e.g., acknowledging diamond mining requests).

⚙️ Easy Setup
Simple configuration with minimal steps to get started.

🧩 Extendable
You can enhance the bot with additional actions such as mining, farming, guarding, etc.

📦 Requirements

Before running the bot, make sure you have:

Node.js (v14 or higher)

Minecraft Java Edition Server (any version supported by mineflayer)

Java (to run the Minecraft server)

## 🛠 Installation
1. Install Node.js

Download and install Node.js from the official website if you haven’t already.

2. Install Dependencies

Create a project folder and install the mineflayer library:
```
npm init -y
npm install mineflayer
```

3. Create the Bot Script

Create a new file named afkBot.js and paste your bot code into it.

4. Run the Bot

Start the bot using:
```
node afkBot.js
```

## ⚙️ Configuration

You can customize the bot inside afkBot.js:

Server Address – Change the host value to your server IP or domain.

Username – Modify the username field to set the bot’s IGN.

Minecraft Version – Update the version field if you're running a different server version.

## 🎮 Usage

Once running, the bot will:

Jump every 60 seconds to prevent AFK kicks.

Listen for private messages such as:
```
/msg <botname> mine diamonds
```
And respond with a confirmation (extendable to perform real tasks).

## 🙌 Credits

Mineflayer — This bot is powered by the Mineflayer .



    
   


