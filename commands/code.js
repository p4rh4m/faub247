const Discord = require('discord.js');

module.exports = {
    name : 'code',
    execute(client,message,args){

        if(message.member.roles.cache.some(role => role.name === 'BotPermission')){

            if (message.member.voice.channel) {
                const channelname = message.member.voice.channel.name;
                const code = args[0];
                message.delete();
                if (code == '') {
                    message.author.send('لطفا از کد مناسب استفاده کنید');
                } else {
                    const embed = new Discord.MessageEmbed();
                    embed.setTitle(`کد ورود به گیم برای چنل ${channelname}`)
                        .addField('­','```css\n'+code+'\n```')
                        .setColor('#1abc9c');
                    const senderChannel = message.member.voice.channel.name;
                    const sender = message.author;
                    if (message.member.voice.channel) {
                        let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
                        for (const [memberID, member] of channel.members) {
                            member.send(embed);
                        }
                        return;
                    }
                }
            }else{
                message.reply('ابتدا در چنل جوین شوید');
            }
        }else{
            message.reply('دسترسی شما برای استفاده از بات کافی نمیباشد از دستور h$ برای کمک استفاده کنید');
        }

    }

}