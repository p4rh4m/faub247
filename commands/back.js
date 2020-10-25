const Discord = require('discord.js');
module.exports = {
    name : 'back',
    execute(client,message,args){
        let userId = message.author.id;
        let id = args[0];
        let mess = args.slice(1,args.length+1).join(' ');
        if(userId === '282096019406323713'){
            const embed = new Discord.MessageEmbed();
            embed.setTitle('message From : developers')
                .addField('متن پیام',`${mess}`,)
                .addField('­','<@282096019406323713>',)
                .setColor('#999999');
            client.users.cache.get(id).send(embed);
            return ;
        }else{
            message.reply('دستور درست وارد نشده است');
            return ;
        }

    }

}