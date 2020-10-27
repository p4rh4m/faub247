const Discord = require('discord.js');

module.exports = {
    name : 'lock',
    execute(client,message,args){

        if(message.member.roles.cache.some(role => role.name === 'BotPermission')){
            if(message.member.voice.channel){
                let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
                lock(channel);


            }else{
                //join first err
                message.reply('ابتدا وارد چنل شوید.')
            }
        }else{
            //permission err
            message.reply('متاسفانه شما دسترسی کافی برای این دستور را ندارید\n دسترسی مورد نیاز : BotPermission')
        }

        async function changeName(channel,msg) {
            try {
                await channel.setName(channel.name + ' 🔒').catch(console.error);
            }catch (e) {
                console.log('E : '+e);
            }

        }


        async function lock(channel){
            try {
                await channel.updateOverwrite(channel.guild.roles.everyone, { CONNECT: false });
                message.channel.send(channel.name + ' : locked 🔒');
                if(channel.name.indexOf('🔒') == -1){
                    changeName(channel,message);
                }
            }catch (e) {
                console.log('E : '+e);
                message.reply('نتونسم چنل رو قفل کنم دوباره تلاش کنید');
            }
        }

    }
}