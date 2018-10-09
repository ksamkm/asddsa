const Discord = require("discord.js");

const client = new Discord.Client();
 
const prefix = "="

const UserBlocked = new Set();





client.on('ready', () => {

  console.log(Logged in as ${client.user.tag}!);

client.user.setGame(Nothing,"http://twitch.tv/Mohamed192837465")

  console.log('')

  console.log('')

  console.log('╔[═════════════════════════════════════════════════════════════════]╗')

  console.log([Start] ${new Date()});

  console.log('╚[═════════════════════════════════════════════════════════════════]╝')

  console.log('')

  console.log('╔[════════════════════════════════════]╗');

  console.log(Logged in as * [ " ${client.user.username} " ]);

  console.log('')

  console.log('Informations :')

  console.log('')

  console.log(servers! [ " ${client.guilds.size} " ]);

  console.log(Users! [ " ${client.users.size} " ]);

  console.log(channels! [ " ${client.channels.size} " ]`);

  console.log('╚[════════════════════════════════════]╝')

  console.log('')

  console.log('╔[════════════]╗')

  console.log(' Bot Is Online')

  console.log('╚[════════════]╝')

  console.log('')

  console.log('')

});

































client.login(process.env.BOT_TOKEN);
