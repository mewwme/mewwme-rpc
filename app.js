const Discord = require("discord.js-selfbot-v13");
const chalk = require('chalk');
require("dotenv").config();
const keepAlive = require("./server.js");
const config = require("./config.js");

keepAlive(config.keepAlivePort);

function formatTime() {
  const date = new Date();
  const options = {
    timeZone: config.timeZone,
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

function getRandomStatus(lastStatus) {
  const statuses = ["idle", "dnd", "online"];
  let newStatus;
  do {
    const randomIndex = Math.floor(Math.random() * statuses.length);
    newStatus = statuses[randomIndex];
  } while (newStatus === lastStatus);
  return newStatus;
}

function setupClient(client, token) {
  let lastStatus = null;

  client.on("ready", async () => {
    console.clear();
   console.log(`${client.user.tag} - RCP STARTED!`);

   const r = new Discord.RichPresence(client)
   .setApplicationId(config.userid)
   .setType(config.type);
 
 if (config.url) r.setURL(config.url);
 if (config.state) r.setState(config.state);
 if (config.name) r.setName(config.name);
 if (config.details) r.setDetails(config.details);
 if (config.largeImage) r.setAssetsLargeImage(config.largeImage);
 if (config.largeText) r.setAssetsLargeText(config.largeText);
 if (config.smallImage) r.setAssetsSmallImage(config.smallImage);
 if (config.smallText) r.setAssetsSmallText(config.smallText);
 
 // Jika ingin timestamp selalu diatur, tidak perlu cek
 r.setStartTimestamp(Date.now());
 

    config.buttons.forEach(button => {
      r.addButton(button.label, button.url);
    });

    client.user.setActivity(r);

    if (config.statusMode === "auto") {
      setInterval(() => {
        const currentStatus = getRandomStatus(lastStatus);
        client.user.setPresence({ status: currentStatus });

        if (config.enableLogging) {
          let statusMessage;
          switch (currentStatus) {
            case 'online':
              statusMessage = chalk.rgb(153, 153, 255)(`AUTO status: `) + chalk.green(currentStatus) + ' 🟢';
              break;
            case 'idle':
              statusMessage = chalk.rgb(153, 153, 255)(`AUTO status: `) + chalk.yellow(currentStatus) + '   🟡';
              break;
            case 'dnd':
              statusMessage = chalk.rgb(153, 153, 255)(`AUTO status: `) + chalk.red(currentStatus) + '    🔴';
              break;
          }

          process.stdout.write(`\r${statusMessage}    `);
        }

        lastStatus = currentStatus;
      }, config.statusChangeInterval);
    } else if (config.statusMode === "manual") {
      client.user.setPresence({ status: config.manualStatus });
      if (config.enableLogging) {
        console.log(chalk.rgb(153, 153, 255)(`RCP manual status: ${config.manualStatus}`));
      }
    }

    if (config.enableCurrentTime) {
      setInterval(() => {
        const currentTime = formatTime();
        const newDetails = `${config.Message}${currentTime}`;
        r.setState(newDetails);
        client.user.setActivity(r);
      }, 1000);
    }
  });

  client.login(token).catch(console.error);
}

const client = new Discord.Client({
  readyStatus: true,
  checkUpdate: true,
});

setupClient(client, process.env.TOKEN);