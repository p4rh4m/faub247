const Discord = require('discord.js');

module.exports = {
    name : 'unmute',
    execute(client,message,args){

        const senderChannel = message.member.voice.channel.name;
        const sender = message.author;
        message.channel.send(`:loud_sound: ${senderChannel} [${sender}]`);
        if (message.member.voice.channel) {
            count = true;
            let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
            for (const [memberID, member] of channel.members) {
                // I added the following if statement to mute everyone but the invoker:
                // if (member != message.member)

                // This single line however, nested inside the for loop, should mute everyone in the channel:
                member.voice.setMute(false);
                if(!isNaN(args) && args != '' ){
                    setTimeout(function () {
                        member.voice.setMute(true);
                        if(count){
                            message.channel.send(`:shushing_face: ${senderChannel} زمان به پایان رسید `);
                            count = false;
                        }
                    },(args*1000));
                }else if(args == ''){
                }
            }
        }

    }
}