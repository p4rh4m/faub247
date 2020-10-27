const Discord = require('discord.js');

module.exports = {
    name : 'unlock',
    execute(client,message,args){

        if(message.member.roles.cache.some(role => role.name === 'BotPermission')){
            if(message.member.voice.channel){
                let channel = message.guild.channels.cache.get(message.member.voice.channel.id);

                unlock(channel);


            }else{
                //join first err
                message.reply('ابتدا وارد چنل شوید.')
            }
        }else{
            //permission err
            message.reply('متاسفانه شما دسترسی کافی برای این دستور را ندارید\n دسترسی مورد نیاز : BotPermission')
        }

        async function changeName(channel,msg,name) {
            await channel.setName(name[0]).catch(console.error);
            return ;
        }

        async function unlock(channel){
            try {
                await channel.updateOverwrite(channel.guild.roles.everyone, { CONNECT: true });
                message.channel.send(channel.name + ' : unlocked 🔓');
                if(channel.name.indexOf('🔒') != -1){
                    let name  = channel.name.split('🔒');
                    changeName(channel,message,name);
                }
            }catch (e) {
                console.log('E : '+e);
                message.reply('نتونسم چنل رو باز کنم دوباره تلاش کنید');
            }
        }

    }
}