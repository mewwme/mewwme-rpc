module.exports = {
    userid: "928711702596423740",
    type: "LISTENING", // Type of the status (WATCHING, LISTENING, PLAYING, STREAMING)
    name: "Mewwme's", // Name of the status
    details: "Mewwme's App", // Details of the status
    state: "Those who wish to sing always find a song ♪", // State of the status work when have enableCurrentTime false
    url: "https://www.youtube.com/watch?v=xvFZjo5PgG0", // URL for the status
    largeImage: "https://cdn.discordapp.com/avatars/928966154817523723/c77a2728e2c25171ccd18ef8f64d052c.webp", // Large image for the status
    smallImage: "https://cdn.discordapp.com/emojis/917227945712562207.gif", // Small image for the status
    buttons: [
      { label: "Add App", url: "https://discord.com/oauth2/authorize?client_id=928711702596423740&permissions=2184571952&scope=bot+applications.commands" }, // Button 1
      { label: "Server Support", url: "https://discord.gg/6EXgrmtkPX" } // Button 2
    ],
    keepAlivePort: 2444, // Port for the keep alive
    enableLogging: true, // true or false console logging
  };