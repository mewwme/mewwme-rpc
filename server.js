   const express = require('express');
   const app = express();



   function keepAlive(port) {
     app.get('/', (req, res) => res.send('Server is Ready!!'));
     app.listen(port, () => console.log(`Server is Ready on port ${port}!!`));
   }

   module.exports = keepAlive;