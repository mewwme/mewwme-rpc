module.exports = {
    userid: "928966154817523723", // User ID
    type: 2, // Type of the status: 0 = PLAYING, 1 = STREAMING, 2 = LISTENING, 3 = WATCHING, 4 = CUSTOM. 5 = COMPETING
    name: "Mewwme's", // Name of the status
    details: "Listen to your favorite music,", // Details of the status
    state: "on discord with your friends!", // State of the status work when have enableCurrentTime false
    Message: 'time in Jakarta:', // Message for the status only work when have enableCurrentTime true
    enableCurrentTime: false, // Enable current time or false to disable
    url: "https://www.youtube.com/watch?v=xvFZjo5PgG0", // URL for the status
    largeImage: "https://cdn.discordapp.com/avatars/928966154817523723/c77a2728e2c25171ccd18ef8f64d052c.webp", // Large image for the status
    largeText: "", // Large text for the status
    smallImage: "https://cdn.discordapp.com/emojis/1068187565582188554.gif", // Small image for the status
    smallText: "", // Small text for the status
    buttons: [
      { label: "Add App", url: "https://discord.com/oauth2/authorize?client_id=928966154817523723&permissions=2184571952&scope=bot+applications.commands" }, // Button 1
      { label: "Server Support", url: "https://discord.gg/6EXgrmtkPX" } // Button 2
    ],
    keepAlivePort: 2863, // Port for the keep alive
    timeZone: "Asia/Jakarta", // Timezone for the time in the details
    enableLogging: true, // true or false console logging
    statusMode: "manual", // "auto" for automatic, "manual" for manual
    statusChangeInterval: 6000, // Interval for auto status change in milliseconds (1000 = 1 seconds)
    manualStatus: "idle" // Used only if statusMode is "manual" Options "online" "idle" "dnd"	
  };