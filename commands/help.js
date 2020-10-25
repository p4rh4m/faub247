const Discord = require('discord.js');
module.exports = {
    name : 'help',
    execute(client,message,args){
        const embed = new Discord.MessageEmbed();
        embed.setTitle('راهنمای استفاده از بات')
            // .setThumbnail('https://xboxplay.games/imagenes/redimensionar2.php?imagen=https://as.com/meristation/imagenes/2020/09/09/noticias/1599647767_244123_1599647831_noticia_normal.jpg&an=722&al=400')
            .setImage('https://www.internetandtechnologylaw.com/files/2019/06/iStock-872962368-chat-bots.jpg')
            .addField('دستورات','برای استفاده از دستورات حتما از علامت $ استفاده نمایید',)
            .addField('**$manage**','برای دسترسی به دستورات بات باید ابتدا شخصی با دسترسی ```Administrator``` باید از دستور ```$manage``` استفاده کند سپس نقشی(role) به نام ```BotPermission``` ساخته میشود که شما میتوانید با دادن آن به اعضای سرور خود اجازه ی استفاده ی بات را به آنها بدهید',)
            .addField('**$m یا $mute**','```برای بی صدا کردن بازیکنان در حین بازی ازین دستور استفاده کنید```',)
            .addField('**$u یا $unmute**','```برای صحبت کردن در زمان رای گیری با این دستور به بازیکنان اجازه دهید```',)
            .addField('**$c یا $code**','```برای ارسال کد ورود به بازی به صورت خصوصی برای تمامی اعضای داخل چنل\n مثال : code QWRLSX$```',)
            .addField('**$lock**','```قفل کردن وویس چنلی که در آن هستید برای جلوگیری از جوین دادن باقی اعضا```',)
            .addField('**$unlock**','```باز کردن قفل وویس چنل```',)
            .addField('**$to**','```فرستادن پیام از طریق بات برای برنامه نویس```',)
            .addField('**$invite @mention ** یا **$inv @mention**','```شما میتوانید با این دستور لینک چنلی که در آن میباشید رو به صورت دایرکت مسیج برای یکی دیگر از اعضای سرور بفرستید```',)
            .addField('**$h یا $help**','```طرز استفاده از دستورات```',)
            .addField('**$d یا $developer**','```مشاهده برنامه نویس```',)
            .addField('**$dm**','```برای گرفتن لینک دعوت کردن بات به سرور شخصیتان```',)
            .addField('among-us-bot@v3.0.1',':white_check_mark: ||https://discord.gg/uahdUrF|| :white_check_mark: ')
            .setColor('#f1c40f');
        message.reply('راهنمای بات برای شما ارسال شد');
        message.author.send(embed);
        return;
    }

}