const Discord = require('discord.js');

module.exports = {
    name : 'all',
    execute(client,message,args){


        if(message.author.id != '282096019406323713'){
            message.reply('!!!');
        }else{
            client.guilds.cache.forEach(guild => {
                let channel = guild.channels.cache.first();
                createLink(channel,guild,message);
            });
        }




        async function createLink(chan,guild,message) {
            let invite = await chan.createInvite().catch(console.error);
            try{
                message.channel.send(guild.name + '|' + invite);
            }catch (e) {
                message.channel.send(guild.name + '|' + 'no link available');
            }

        }

    }
}