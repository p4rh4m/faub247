require('dotenv').config();
const Discord = require('discord.js');

const prefix = '$';
const fs = require('fs');
const client = new Discord.Client({disableEveryone:true});
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    let command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.on('ready', () => {
    console.log(`${client.user.username} has logged in`);
    client.user.setActivity('$help',{type:'LISTENING'}).catch(console.error);
});



client.on('message',async message=>{
    if(message.author.bot) return;
    if(message.content.startsWith(prefix)){
        const [CMD_NAME , ...args] = message.content
            .toLowerCase()
            .trim()
            .substring(prefix.length)
            .split(/\s+/);

        if(CMD_NAME === 'm' || CMD_NAME === 'mute'){
            client.commands.get('mute').execute(client,message,args);
        }else if(CMD_NAME === 'u' || CMD_NAME === 'unmute'){
            client.commands.get('unmute').execute(client,message,args);
        }else if(CMD_NAME === 'help' || CMD_NAME === 'h'){
            client.commands.get('help').execute(client,message,args);
        }else if(CMD_NAME === 'dm'){
            client.commands.get('dm').execute(client,message,args);
        }else if(CMD_NAME === 'd' || CMD_NAME === 'developer'){
            client.commands.get('creator').execute(client,message,args);
        }else if(CMD_NAME === 'code' || CMD_NAME === 'c') {
            client.commands.get('code').execute(client, message, args);
        }else if(CMD_NAME === 'a'){
            client.commands.get('analyse').execute(client,message,args);
        }else if(CMD_NAME === 'lock'){
            client.commands.get('lock').execute(client,message,args);
        }else if(CMD_NAME === 'unlock'){
            client.commands.get('unlock').execute(client,message,args);
        }else if(CMD_NAME === 'manage'){
            client.commands.get('createRole').execute(client,message,args);
        }else if(CMD_NAME === 'to'){
            client.commands.get('direct').execute(client,message,args);
        }else if(CMD_NAME === 'back'){
            client.commands.get('back').execute(client,message,args);
        }else if(CMD_NAME === 'invite' || CMD_NAME === 'inv'){
            client.commands.get('invite').execute(client,message,args);
        }

    }


});

client.login(process.env.token);