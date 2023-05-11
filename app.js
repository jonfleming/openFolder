const { exec } = require('child_process');

export function openFolder(path) {
  exec(`explorer.exe "${path}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error ${error}`);
      return;
    }
    console.log(`stdout ${stdout}`);
    console.error(`stderr ${stderr}`);
  });
}
