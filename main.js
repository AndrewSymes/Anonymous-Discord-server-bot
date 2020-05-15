const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
bot.login(token);

bot.on("ready", () => {
    console.log(bot.user.username+" is ready")
})

bot.on("message", msg => {
    if(msg.channel.type == "dm"){
        bot.guilds.get("xxxxxxxxxxxxxxxxxx").channels.get("xxxxxxxxxxxxxxxxxx").send(msg.content)
    }
})
bot.on("error",err=>{
    console.log(err);
})
