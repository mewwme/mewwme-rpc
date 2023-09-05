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
    .setState('Moderation, Music, Fun, Utility, Etc')
    .setName('Lucy ♡')
    .setDetails(`a discord moderation & music  24/7`)
    .setStartTimestamp(Date.now())
.setAssetsLargeImage('https://cdn.discordapp.com/attachments/1098969636306960465/1148603329291763834/luciaaa.png')
    .setAssetsLargeText('Moo ♪')
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/917227945712562207.gif?size=96&quality=lossless')
    .setAssetsSmallText('Verified')
    .addButton('Invite Lucy ♡', 'https://discord.com/api/oauth2/authorize?client_id=928966154817523723&permissions=1073080662&scope=applications.commands%20bot&redirect_uri=https%3A%2F%2Flucy.hop.sh%2Fapi%2Fcallback')
    .addButton('Website Lucy ♡', 'https://lucy.is-a.fun/');
  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" });

  setInterval(() => {
    const newTime = formatTime();
    const newDetails = `a discord moderation & music  24/7`; //`are you sleeping?`;
    r.setDetails(newDetails);
    client.user.setActivity(r);
  }, 1000); // Update every second
});

const mySecret = process.env.TOKEN;
client.login(mySecret);