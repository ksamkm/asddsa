const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "!"

const UserBlocked = new Set();





client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

client.user.setGame(`Nothing҉`,"http://twitch.tv/Mohamed192837465")

  console.log('')

  console.log('')

  console.log('╔[═════════════════════════════════════════════════════════════════]╗')

  console.log(`[Start] ${new Date()}`);

  console.log('╚[═════════════════════════════════════════════════════════════════]╝')

  console.log('')

  console.log('╔[════════════════════════════════════]╗');

  console.log(`Logged in as * [ " ${client.user.username} " ]`);

  console.log('')

  console.log('Informations :')

  console.log('')

  console.log(`servers! [ " ${client.guilds.size} " ]`);

  console.log(`Users! [ " ${client.users.size} " ]`);

  console.log(`channels! [ " ${client.channels.size} " ]`);

  console.log('╚[════════════════════════════════════]╝')

  console.log('')

  console.log('╔[════════════]╗')

  console.log(' Bot Is Online')

  console.log('╚[════════════]╝')

  console.log('')

  console.log('')

});














client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply("امر وتدلل !!");
    }
});



client.on('message', message => {
   
    let args = message.content.split(' ').slice(1).join(' ');
   
  if (message.content === 'السلام عليكم') {
      message.channel.send(`<@${message.author.id}> وعليكم السلام والرحمة منور`)
  }
 
 
  if (message.content.startsWith('+bc')) {
          if (!args[0]) {
message.channel.send("**+bc <وعليكم السلام>**");
return;
}
message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
   m.send(`${args}`);
 
});
  }
 
});


client.on('message', message =>{
  if(message.content.startsWith('خروج')){
    const voiceChannel = message.member.voiceChannel
    voiceChannel.disconnect();
    message.channel.send("تم الخروج من الروم الصوتي")
}})






const fs = require("fs"); 
const ms = require("ms");

const alphacodes = [
  "#credit",
  "#profile",
  "#rep",
  "#top",
  "!level",
  "%!id",
  "!فكك",
  "!صراحه",
  "!xo",
  "!كت تويت",
  "!invites",
  "!top",
  "!help",
  "!stop",
  "!play",
  "!skip"

]
client.on('message', message => {
var mute = message.guild.roles.find("name", "mute");
var warn = message.guild.roles.find("name", "warn");
  if(alphacodes.some(word => message.content.includes(word))) {
  if(message.channel.id !== '413859253510602771') return;
  if (message.author.bot) return;
  
  if(message.member.roles.has()) return;
  if(!message.member.roles.has()) {
  message.member.addRole(warn)
  message.reply(`**تم اعطائك تحذير لانك استخدمت اوامر في الشات😠**`) 
  }
  
  if(message.member.roles.has(warn.id)) {
      message.member.addRole(mute)
      message.member.removeRole(warn)
      let mutetime = "10m";
    
    message.reply(`**تم اعطائك ميوت كتابي لمدة 10 دقائق 🤐**!`);
  
      setTimeout(function(){
      message.member.removeRole(mute)
      message.reply(`تم الغاء الميوت عنك!`)
    }, ms(mutetime))    
     
  }
  
  }
  })


















































































client.login(process.env.BOT_TOKEN);
