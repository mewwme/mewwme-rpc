const Discord = require("discord.js-selfbot-v13");
const chalk = require('chalk');
require("dotenv").config();
const keepAlive = require("./server.js");
const config = require("./config.js");

keepAlive(config.keepAlivePort);

function setupClient(client, token) {
  client.on("ready", async () => {
    console.clear();
    console.log(`${client.user.tag} - RCP STARTED!`);

    const r = new Discord.RichPresence(client)
      .setApplicationId(config.userid)
      .setType(config.type)
      .setURL(config.url)
      .setName(config.name)
      .setDetails(config.details)
      .setState(config.state)
      .setAssetsLargeImage(config.largeImage)
      .setAssetsSmallImage(config.smallImage)

    config.buttons.forEach(button => {
      r.addButton(button.label, button.url);
    });

    client.user.setActivity(r);

    // Set the status to 'idle' directly
    client.user.setPresence({ status: 'idle' });
    if (config.enableLogging) {
      console.log(chalk.rgb(153, 153, 255)(`RCP status: idle 🟡`));
    }
  });

  client.login(token).catch(console.error);
}

const client = new Discord.Client({
  readyStatus: true,
  checkUpdate: true,
});

setupClient(client, process.env.TOKEN);
