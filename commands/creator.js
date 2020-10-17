const Discord = require('discord.js');

module.exports = {
    name : 'creator',
    execute(client,message,args){
        const embed = new Discord.MessageEmbed();
        embed.setTitle('برنامه نویس')
            .setImage('https://cdn.dribbble.com/users/1551609/screenshots/6681276/snakedev-dribbble.png')
            .addField(':computer:','این بات را صرفا برای حرفه ای تر کردن فضای بازی شما عزیزان طراحی کرده ام',)
            .addField('ساخته شده با :heart:  توسط p4rh4m',':arrow_up: :arrow_up: :arrow_up: ',)
            .addField('among-us-bot@v2.0.0','https://discord.gg/4sNYeU')
            .setColor('#2ecc71');
        message.author.send(embed);
    }

}