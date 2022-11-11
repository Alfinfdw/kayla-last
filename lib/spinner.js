var spin = require('spinnies')

var spinner = { 
"interval": 120,
"frames": [
"",
"𝙓",
"𝙓𝙚",
"𝙓𝙚𝙯",
"𝙓𝙚𝙯𝙮",
"𝙓𝙚𝙯𝙮 |",
"𝙓𝙚𝙯𝙮 | 𝙓",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮 𝙒",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮 𝙒𝙞",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮 𝙒𝙞𝙩",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮 𝙒𝙞𝙩𝙝",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮 𝙒𝙞𝙩𝙝 𝙕",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮 𝙒𝙞𝙩𝙝 𝙕𝙮",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮 𝙒𝙞𝙩𝙝 𝙕𝙮𝙠",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮 𝙒𝙞𝙩𝙝 𝙕𝙮𝙠𝙪",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮 𝙒𝙞𝙩𝙝 𝙕𝙮𝙠𝙪𝙖",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮 𝙒𝙞𝙩𝙝 𝙕𝙮𝙠𝙪𝙖𝙣",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮 𝙒𝙞𝙩𝙝 𝙕𝙮𝙠𝙪𝙖",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮 𝙒𝙞𝙩𝙝 𝙕𝙮𝙠𝙪",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮 𝙒𝙞𝙩𝙝 𝙕𝙮𝙠",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮 𝙒𝙞𝙩𝙝 𝙕𝙮",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮 𝙒𝙞𝙩𝙝 𝙕",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮 𝙒𝙞𝙩𝙝",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮 𝙒𝙞𝙩",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮 𝙒𝙞",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮 𝙒",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚𝙮",
"𝙓𝙚𝙯𝙮 | 𝙓𝙚",
"𝙓𝙚𝙯𝙮 | 𝙓",
"𝙓𝙚𝙯𝙮 | 𝙓",
"𝙓𝙚𝙯𝙮 |"
"𝙓𝙚𝙯𝙮",
"𝙓𝙚𝙯",
"𝙓𝙚",
"𝙓",
""
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}
