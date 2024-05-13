const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'userinfo',
    aliases: ['user', 'uinfo'],
    description: 'Get information about a user',
    execute(message, args) {
        // Check if a user was mentioned in the command, or use the message author as the default user
        const user = message.mentions.users.first() || message.author;

        // Create an embed object
        const embed = new EmbedBuilder()
        .setColor('#FFFFFF')
        .setAuthor({
        name: 'User Info!',
        iconURL: 'https://media.discordapp.net/attachments/933555415394959450/1231779648959152210/image.png?ex=6642bf31&is=66416db1&hm=5c57b8d138a43323ac60352c75d396ecc640c391f5ebd14e6a04dcf1fca8233a&=&format=webp&quality=lossless&width=420&height=350', 
        url: 'https://discord.gg/E8XhYrDcjV'
    })
        .setThumbnail(user.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setDescription(`**Username**:  ${user.username}\n**Discriminator**:  ${user.discriminator}\n**ID**:  ${user.id}\n**Joined Discord**:  ${user.createdAt.toUTCString()}`)
        .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};


