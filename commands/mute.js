const Discord = require('discord.js');

module.exports = {
        name : 'mute',
        execute(client,message,args){

                if(message.member.hasPermission('MOVE_MEMBERS')){
                        const senderChannel = message.member.voice.channel.name;
                        const sender = message.author;
                        message.channel.send(`:shushing_face: ${senderChannel} [${sender}]`);

                        if (message.member.voice.channel) {
                                message.delete();
                                let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
                                for (const [memberID, member] of channel.members) {
                                        // I added the following if statement to mute everyone but the invoker:
                                        // if (member != message.member)

                                        // This single line however, nested inside the for loop, should mute everyone in the channel:
                                        member.voice.setMute(true);
                                }
                        }
                }else{
                        message.reply('دسترسی شما برای استفاده از بات کافی نمیباشد از دستور h$ برای کمک استفاده کنید');
                }

        }
}