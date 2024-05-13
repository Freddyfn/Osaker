const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'owner',
    description: 'Bot owner info',
    execute(message, args) {
        const youtubeLink = 'https://www.youtube.com/@GlaceYT';
        const InstagramLink = 'https://www.instagram.com/glaceytt';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(' 🫅 Owner Info')
            .setDescription(`__**About me**__:)`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};
