const Discord = require('discord.js');
const embed = new Discord.MessageEmbed();
embed.setTitle('دعوت کردن بات به سرور شخصی')
    .setImage('https://i.pinimg.com/736x/ee/5f/54/ee5f545f99b81b74260342a4c2738ea3.jpg')
    .addField('لینک دعوت کردن بات به سرور شخصی','https://discord.com/oauth2/authorize?client_id=766247914254893116&scope=bot&permissions=8')
    .addField('چگونه بات را دعوت کنم ؟','برای دعوت کردن بات به سرور کافی است از لینک بالا کمک بگیرید توجه داشته باشید برای دعوت کردن بات حتما باید رنک Moderator داشته باشید')
    .addField('درصورت داشتن هرگونه سوال و یا انتقاد','P4rh4m#4648')
    .addField('among-us-bot@v2.0.0','https://discord.gg/4sNYeU')
    .setColor('RED');
module.exports = {
    name : 'dm',
    execute(client,message,args){
        message.author.send(embed);
    }

}