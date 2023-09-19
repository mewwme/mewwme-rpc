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
    .setState('Prambors 102.2 FM Jakarta')
    .setName('+62 Radio')
    .setDetails(`Radio nya warga +62`)
    .setStartTimestamp(Date.now())
.setAssetsLargeImage('https://cdn.discordapp.com/avatars/1090120136167538748/1d5bced34a4a9d90f7033fbc95264faa.webp?size=1024&width=0&height=256')
    .setAssetsLargeText('+62 Radio')
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/917227945712562207.gif?size=96&quality=lossless')
    .setAssetsSmallText('Verified')
    .addButton('Listen', 'https://discord.com/oauth2/authorize?client_id=1090120136167538748&permissions=551940254784&redirect_uri=https%3A%2F%2F62radio.is-a.fun%2Fthankyou&response_type=code&scope=guilds.join%20bot%20applications.commands')
    .addButton('Website', 'https://62radio.is-a.fun/');
  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" });

  setInterval(() => {
    const newTime = formatTime();
    const newDetails = `Radio nya warga +62`; //`are you sleeping?`;
    r.setDetails(newDetails);
    client.user.setActivity(r);
  }, 1000); // Update every second
});

const mySecret = process.env.TOKEN;
client.login(mySecret);