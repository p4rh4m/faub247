const Discord = require('discord.js');

module.exports = {
    name : 'createRole',
    execute(client,message,args){

        if(message.member.hasPermission('ADMINISTRATOR')){
            if(message.guild.roles.cache.some(role => role.name === 'BotPermission')){
                message.reply('دسترسی قبلا برای شما فعال شده است');
            }else{
                message.guild.roles.create({
                    data: {
                        name: 'BotPermission',
                        color: '#006266',
                        position : '1'
                    },
                    reason: 'necessary role to use Among us bot',
                })
                    .then(message.reply('سرور متناسب با بات تنظیم شد'))
                    .catch(console.error);
            }
        }else{
            message.reply('برای استفاده از این دستور حتما باید دسترسی Administrator را داشته باشید');
        }




    }
}