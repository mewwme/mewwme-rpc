const Discord = require("discord.js-selfbot-v13");
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false,
});
require("dotenv").config();
const keepAlive = require("./server.js");
keepAlive();

function formatTime() {
  const date = new Date();
  const options = {
    timeZone: "Asia/Jakarta",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

client.on("ready", async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId("1091763429779443844")
    .setType("LISTENING")
    .setURL("https://www.youtube.com/watch?v=xvFZjo5PgG0")
    .setState("on discord with your friends!")
    .setName(`Mewwme's`)
    .setDetails(`Listen to your favourite music,`)
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage(
      "https://cdn.discordapp.com/attachments/1124064844845428796/1187070205071982702/avatarme.png",
    )
    .setAssetsLargeText(`Mewwme's`)
    .setAssetsSmallImage(
      "https://cdn.discordapp.com/emojis/917227945712562207.gif?size=96&quality=lossless",
    )
    .setAssetsSmallText("Verified")
    .addButton(
      "Listening",
      "https://discord.com/api/oauth2/authorize?client_id=928711702596423740&permissions=551940385840&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.gg%2F6EXgrmtkPX&scope=guilds.join+bot+applications.commands",
    )
    .addButton("Server Support", "https://discord.gg/2pkvB82NaS");
  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" });

  setInterval(() => {
    const newTime = formatTime();
    const newDetails = `Listen to your favourite music,`; //`are you sleeping?`;
    r.setDetails(newDetails);
    client.user.setActivity(r);
  }, 1000); // Update every second
});

const mySecret = process.env.TOKEN;
client.login(mySecret);
