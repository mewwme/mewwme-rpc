const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
require('dotenv').config();
const keepAlive = require('./server.js');
keepAlive();

function formatTime() {
  const date = new Date();
  const options = {
    timeZone: 'Asia/Jakarta',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1091763429779443844')
    .setType('PLAYING')
    .setURL('https://www.youtube.com/watch?v=xvFZjo5PgG0')
    .setState('Everyone dies at the end.')
    .setName('oWalah')
    .setDetails(`Mostly sleepless`)
    .setStartTimestamp(Date.now())
.setAssetsLargeImage('https://cdn.discordapp.com/banners/1081461785497960448/a_e2e35b6dd1fea1f8d432ddfd4f315e80.gif?size=4096')
    .setAssetsLargeText('Made by tragic')
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/917227945712562207.gif?size=96&quality=lossless')
    .setAssetsSmallText('Verified')
    .addButton('-`♡´-', 'https://hello.lrmn.site/')
    .addButton('-`♡´-', 'https://hii.lrmn.site');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" });

  setInterval(() => {
    const newTime = formatTime();
    const newDetails = `Mostly sleepless`; //`are you sleeping?`;
    r.setDetails(newDetails);
    client.user.setActivity(r);
  }, 1000); // Update every second
});

const mySecret = process.env.TOKEN;
client.login(mySecret);