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


client.on("message", message => {
  if(message.content.startsWith("!اطفي")) {
  if(message.author.id === "303867598544830475) { //اي ديك
    message.channel.send('سيتم اطفاء البوت')
    process.kill(process.pid)
  } else return;
}})





















































































client.login(process.env.BOT_TOKEN);
