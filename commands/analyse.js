const Discord = require('discord.js');

module.exports = {
    name : 'analyse',
    execute(client,message,args){

        // const count = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)
        const count = message.guild.memberCount;
        const region = message.guild.region;
        const name = message.guild.name;
        const owner = message.guild.owner;
        const ownerId =  message.guild.ownerID;
        message.reply(`server ${name} currently has ${count} members in ${region} region the owner is ${owner} id (${ownerId})`);
        console.log(`server ${name} currently has ${count} members in ${region} region the owner is ${owner} id (${ownerId})`);
    }
}