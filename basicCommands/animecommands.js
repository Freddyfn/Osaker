const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'animecommands',
  description: 'Display a list of available anime-related commands!',
  execute(message, args) {
    const embed = new EmbedBuilder()
      .setColor('#FFFFFF')
      .setTitle('Anime Commands')
      .setDescription(`__**✅ List Of Availabe Interations**__\n\n▶️ __**Section 1 :**__\n  blush, cuddle, dance, slap, bonk, bully, hug, confused, kiss, pat, happy, smile.\n\n▶️ __**Section 2 :**__\n yes, highfive, wink, wave, thinking, sad, cry, stare, bored, scream, nervous, kill.\n`)
      
      .setImage(`https://media.discordapp.net/attachments/933555415394959450/1231779648959152210/image.png?ex=6642bf31&is=66416db1&hm=5c57b8d138a43323ac60352c75d396ecc640c391f5ebd14e6a04dcf1fca8233a&=&format=webp&quality=lossless&width=420&height=350`);
    message.reply({ embeds: [embed] });
  },
};
