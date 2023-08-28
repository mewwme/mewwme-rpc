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
    .setType('LISTENING')
    .setURL('https://www.youtube.com/watch?v=xvFZjo5PgG0')
    .setState('Youtube, Spotify & Soundcloud, Etc')
    .setName('Moo ♪')
    .setDetails(`Moo ♪ a discord bot music`)
    .setStartTimestamp(Date.now())
.setAssetsLargeImage('https://cdn.discordapp.com/attachments/1098969636306960465/1145731562021859339/moo.png')
    .setAssetsLargeText('Moo ♪')
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/917227945712562207.gif?size=96&quality=lossless')
    .setAssetsSmallText('Verified')
    .addButton('Invite Moo ♪', 'https://discord.com/api/oauth2/authorize?client_id=1135151608565616662&permissions=689379470656&scope=applications.commands%20bot')
    .addButton('Website Moo ♪', 'https://moo.is-a.fun/');
  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" });

  setInterval(() => {
    const newTime = formatTime();
    const newDetails = `Moo ♪ a discord bot music`; //`are you sleeping?`;
    r.setDetails(newDetails);
    client.user.setActivity(r);
  }, 1000); // Update every second
});

const mySecret = process.env.TOKEN;
client.login(mySecret);