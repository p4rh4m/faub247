const Discord = require('discord.js');

module.exports = {
    name : 'invite',
    execute(client,message,args){



        if(message.member.roles.cache.some(role => role.name === 'BotPermission')){
            if(message.member.voice.channel){
                let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
                replyWithInvite(channel,args);
            }else{
                let channel = message.guild.channels.cache.get(message.channel.id);
                replyWithInvite(channel,args);
            }
            async function replyWithInvite(channel,args) {
                let invite = await channel.createInvite({
                    maxAge:300,
                }).catch(console.error);
                if(args.length>0){
                    let id = args[0].replace(/[\\<>@#&!]/g, "");
                    try {
                        client.users.cache.get(id).send(invite ? `${invite}` : "برای شما یک دعوت نامه منقضی شده فرستاده شد");
                        message.reply('دعوت فرستاده شد');
                        return ;
                    }catch (e) {
                        message.reply('نتونستم دعوت نامه درست کنم');
                        return ;
                    }
                }else{
                    try{
                        message.reply(invite ? `${invite}` : "برای شما یک دعوت نامه منقضی شده فرستاده شد");
                        return ;
                    }catch (e) {
                        message.reply('نتونستم دعوت نامه درست کنم');
                        return ;
                    }
                }
            }
        }else{
            message.reply('متاسفانه شما دسترسی کافی برای این دستور را ندارید\n دسترسی مورد نیاز : BotPermission');
        }








    }
}