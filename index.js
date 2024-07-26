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
    .setApplicationId("928711702596423740")
    .setType("LISTENING")
    .setURL("https://www.youtube.com/watch?v=xvFZjo5PgG0")
    .setState("on discord with your friends!")
    .setName(`Mewwme's`)
    .setDetails(`Listen to your favourite music,`)
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage(
      "https://cdn.discordapp.com/attachments/1239455856748400661/1248431340651679784/Mewwme_-_Discord_Avatar.jpg?ex=6663a3ca&is=6662524a&hm=b0e192a748a9eb64376ec42c4e4614d7506388f6ef51f5f43cf290c506d2073b&",
    )
    .setAssetsLargeText(`Mewwme's`)
    .setAssetsSmallImage(
      "https://cdn.discordapp.com/emojis/917227945712562207.gif?size=96&quality=lossless",
    )
    .setAssetsSmallText("Verified")
    .addButton(
      "Listening",
      "https://discord.com/oauth2/authorize?client_id=928711702596423740&permissions=2184571952&scope=bot+applications.commands",
    )
    .addButton("Server Support", "https://discord.gg/6EXgrmtkPX");
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
