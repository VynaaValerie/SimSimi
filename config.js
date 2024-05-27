global.owner = [
  "6282389924037", //ganti nomor owner
  "628" //nomor owner kedua kalo ada
]
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
/*
SCRIPT BY © VYNAA VALERIE 
•• recode kasih credits 
•• contacts: (t.me/VLShop2)
•• instagram: @vynaa_valerie 
•• (github.com/VynaaValerie) 
*/