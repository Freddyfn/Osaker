const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'owner',
    description: 'Bot owner info',
    execute(message, args) {
        const youtubeLink = 'https://www.youtube.com/channel/UClf6p9Un1SsNmL9JQlrIyVg';
        const InstagramLink = 'https://www.instagram.com/freddyaz_/';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(' 🫅 Owner Info')
            .setDescription(`__**About me**__:)`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};
