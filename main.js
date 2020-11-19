const Discord = require('discord.js');
const { token } = require('./config.json');
const client = new Discord.Client();
const fs = require('fs');
const prefix = '-'

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}


client.once('ready', () => {
    console.log('Michaels Bot is online!');
    client.user.setActivity("Getting Developed", { type: 'LISTENING'}).catch(console.error);
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if(message.mentions.members.first()) {
       message.channel.send('The prefix is ' + prefix);
    };

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command == 'github') {
        client.commands.get('github').execute(message, args);
    } else if (command == 'command') {
        client.commands.get('command').execute(message, args, Discord);
    } else if (command == 'help') {
        client.commands.get('help').execute(message, args, Discord);
    }
});

client.login(token);
