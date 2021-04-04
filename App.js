var { spawn } = require('child_process'),
{readFileSync} = require('fs');
module.exports = () => {
var jsn = JSON.parse(readFileSync('package.json')).scripts
for(var sr in jsn) spawn('npm', ['run', sr]).stdout.on('data',data => console.log(data.toString()))
}