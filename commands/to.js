const Discord = require('discord.js');
module.exports = {
    name : 'direct',
    execute(client,message,args){

        let mess = args.slice(0,args.length+1).join(' ');
        let userId = message.author.id;

        const embed = new Discord.MessageEmbed();
        embed.setTitle('پیام از طرف کاربر')
            .addField(`${userId}`,` <@${userId}>`,)
            .addField('متن پیام',`${mess}`,)
            .setColor('#000000');

        try {
            client.users.cache.get("282096019406323713").send(embed);
            message.reply('باتشکر پیام شما دریافت شد بعد از مشاهده از طریق بات با شما در ارتباط خواهم بود')
        }catch (e) {
            message.reply('در حال حاضر در دسترس نمیباشد')
        }
        return ;

    }

}