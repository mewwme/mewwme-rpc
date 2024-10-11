const { spawn } = require('child_process');
const fs = require('fs');

let currentProcess;

function startProcess() {
  currentProcess = spawn('node', ['app.js'], { stdio: 'inherit' });

  currentProcess.on('close', (code) => {
    console.log(`Process exited with code ${code}`);
    startProcess();
  });
}

startProcess();

fs.watchFile('./config.js', (curr, prev) => {
  console.log('Config file changed, restarting...');
  currentProcess.kill(); 
});