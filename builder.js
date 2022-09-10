const { exec } = require('child_process');
const { cpSync, rmSync } = require('fs');


console.log("Building Extension...");

let build = exec('npm run builds', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
});

build.on("exit", () => {
    cpSync("dist/main.js", "extension.js");
    rmSync("dist", { recursive: true });
    console.log("Extension Built! Upload extension.js to the Hye Ararat image server.");
})
