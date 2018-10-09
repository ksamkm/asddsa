const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}`);

});



client.on('message',async message => {

if(message.content === 'السلام عليكم') {

  message.channel.send('وعليكم السلام منور والله');



 

}

 });

   var client = new Discord.Client();

client.on("message", async msg => {

    if (msg.channel.type !== "text") return undefined;

    if (msg.auhtor.bot) return undefined;

    var args = msg.content.split(" ")

    var prefix = "!"

    if (msg.content.toLowerCase().startsWith(prefix + "purge")) {

    if(!msg.guild.members.get(msg.author.id).hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You lack permissions.")

    if(!msg.guild.members.get(client.user.id).hasPermission("MANAGE_MESSAGES")) return msg.channel.send("I lack permissions.")

    if (!args[1]) return msg.channel.send("DiscordAPI Err : Missing args.")

    var count = parseInt(args[1]);

    var fetched = msg.channel.fetchMessages({limit : count})

    if (isNaN(count)) return msg.channel.send("DiscordAPI Err : Only numbers are allowed.")

    if (count < 0) return msg.channel.send("DiscordAPI Err : Unvalid numbers.")

    if (count == 0) return msg.channel.send("DiscordAPI Err : 0 messages ???")

    if (count > 100) return msg.channel.send(`DiscordAPI Err : cannot delete ${args[1]} message..`)

    if (fetched.length == 0) return msg.channel.send(`DiscordAPI Err : ${msg.channel.name} is empty..`)

    else {
    try {
        fetched.then(async msgs => {
          await msg.channel.bulkDelete(msgs)
          await msg.channel.send(`Bulked ${msgs.size-=1} message.`).then(msg => {
            msg.delete(4000)
          })
        })
    } catch (e) {
      console.log(e.stack)
    }
    }
  }
})             






























client.login(process.env.BOT_TOKEN);
