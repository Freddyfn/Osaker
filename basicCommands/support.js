const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'support',
    description: 'support server of this Bot',
    execute(message, args) {
        const supportServerLink = "https://discord.gg/E8XhYrDcjV";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://media.discordapp.net/attachments/933555415394959450/1231779648959152210/image.png?ex=6642bf31&is=66416db1&hm=5c57b8d138a43323ac60352c75d396ecc640c391f5ebd14e6a04dcf1fca8233a&=&format=webp&quality=lossless&width=420&height=350', 
              url: 'https://discord.gg/E8XhYrDcjV'
          })
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};
