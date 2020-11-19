const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help',
    description: "shows all commands in an imbed",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#38b4ff')
        .setTitle('Commands')
        .setDescription('All of the current commands for this bot.')
        .addFields(
            {name: '-help', value: 'Command that brings up help menu'},
            {name: '-github', value: "Creator's github"},
            {name: '-ping', value: 'Test command'}
        )
        .setFooter('This bot was coded by Michael Srenaski © 2020');
        message.channel.send(newEmbed)
    }
}