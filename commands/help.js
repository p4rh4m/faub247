const Discord = require('discord.js');
const embed = new Discord.MessageEmbed();
embed.setTitle('راهنمای استفاده از بات')
    // .setThumbnail('https://xboxplay.games/imagenes/redimensionar2.php?imagen=https://as.com/meristation/imagenes/2020/09/09/noticias/1599647767_244123_1599647831_noticia_normal.jpg&an=722&al=400')
    .setImage('https://www.internetandtechnologylaw.com/files/2019/06/iStock-872962368-chat-bots.jpg')
    .addField('دستورات','برای استفاده از دستورات حتما از علامت $ استفاده نمایید',)
    .addField('$m یا $mute','برای بی صدا کردن بازیکنان در حین بازی ازین دستور استفاده کنید',)
    .addField('$u یا $unmute','برای صحبت کردن در زمان رای گیری با این دستور به بازیکنان اجازه دهید',)
    .addField('$h یا $help','طرز استفاده از دستورات',)
    .addField('$c یا $creator','مشاهده برنامه نویس',)
    .addField('$dm','برای گرفتن لینک دعوت کردن بات به سرور شخصیتان',)
    .addField('نکته مهم','کسانی میتوانند از دستورات بات استفاده کنند که رنکشان در سرور قابلیت Move Members داشته باشد',)
    .addField('among-us-bot@v2.0.0','https://discord.gg/4sNYeU')
    .setColor('#f1c40f');
module.exports = {
    name : 'help',
    execute(client,message,args){
        message.channel.send(embed);
    }

}