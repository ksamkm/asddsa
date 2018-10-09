const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

cconst swearWords = ["كل زق", "كس امك", "يامطي", "", "", "", "", "", "", "", "", ""]; 
  if( swearWords.some(word => message.content.includes(word)) ) {
    message.reply("عيب بابا").then(sentMessage =>{
      sentMessage.delete(20000)
    })
    message.delete(3000)
    client.channels.get('413859253510602771').send(message.author.toString() + "استخدم كلام لا يليق ~")
  }
});




















client.login('token');
