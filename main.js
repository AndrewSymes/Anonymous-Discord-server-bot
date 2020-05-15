const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "NjY4ODY5NDU0MTQ2MzA2MDc1.XiXj4w.eiVyxVKwtvp97AQDW4qYhCDcS10";
bot.login(token);

bot.on("ready", () => {
    console.log(bot.user.username+" is ready")
})

bot.on("message", msg => {
    if(msg.channel.type == "dm"){
        bot.guilds.get("667038702664548372").channels.get("668879774810112012").send(msg.content)
    }
})
bot.on("error",err=>{
    console.log(err);
})