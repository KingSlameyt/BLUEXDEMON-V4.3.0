const version = require("@whiskeysockets/baileys/package.json").version



//Input number for pair code
global.pairingNumber = "491752821649"




//DO NOT EDIT OR MODD
global.botNumber = pairingNumber
global.domain = "https://.nobodysey.me"
global.apikey = "ptla_DfGlmoY7jCzmkNUgyK925FPVE08Kr4mxwLMep"
global.capikey = "ptlc_GTm42E3qIwbLW3K9w3htljUvhGvnG71hoPTqE"
global.egg = "15"
global.loc = "1"
global.anticall = false
global.autoReadChat = false
global.alwaysonline = true
global.autoswview = false
global.public = true
global.autoreact = false
global.antidelete = false
global.autotyping = false
global.autoBio = false
global.antiSpam = true
global.sign = "𓂀"
// ☞ ➻ ➽ ☛ 〆 
global.bank = "Opay"
global.bankname = "BLUE"
global.accnumber = "492173876676"
global.language = "en"
global.sessionName = "session"
global.pairingCode = true 
global.runWith = "𝙺𝚊𝚕𝚒 𝚕𝚒𝚗𝚞𝚡"
global.newsletterJid = "120363304326105871@newsletter"
global.newsletterName = "𝙰𝚟𝚊𝚜𝚝 𝚡 𝚂𝚑𝚒𝚖𝚊𝚗𝚘 𝐕1"
global.caption = "𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙰𝚟𝚊𝚜𝚝"
global.ownerName = "𝚂𝚑𝚒𝚖𝚊𝚗𝚘"
global.syt = 'https://whatsapp.com/channel/0029Vb2p8dTDZ4LegbiuKz1m'
global.sgc = 'https://whatsapp.com/channel/0029Vb2p8dTDZ4LegbiuKz1m'
global.sig = 'https://whatsapp.com/channel/0029Vb2p8dTDZ4LegbiuKz1m'
global.web = 'https://whatsapp.com/channel/0029Vb2p8dTDZ4LegbiuKz1m'
//setbot
global.botName = "𝙰𝚟𝚊𝚜𝚝 𝚡 𝚂𝚑𝚒𝚖𝚊𝚗𝚘 𝚟1" 
global.wm = "𝙰𝚟𝚊𝚜𝚝 𝚡 𝚂𝚑𝚒𝚖𝚊𝚗𝚘𝐕1"
global.fake = botName
global.setmenu = "image" 
global.docType = "application/vnd.ms-excel"
global.themeemoji = '❤️‍🔥'
global.fotoRandom = [
"https://wallpapercave.com/w/wp10565434.jpg",
"https://wallpapercave.com/w/wp10565434.jpg"]
global.baileysMd = true
global.multi = false
global.prefa = "!"
global.Console = false
global.autorespon = false
global.copyright = `𝙰𝚟𝚊𝚜𝚝 𝚡 𝚂𝚑𝚒𝚖𝚊𝚗𝚘`
global.baileysVersion = `${themeemoji}Baileys ${version}`
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="Bot WhatsApp"
global.packName = `𝙰𝚟𝚊𝚜𝚝 𝚡 𝚂𝚑𝚒𝚖𝚊𝚗𝚘`
global.authorName = "Avast x Shimano"
global.replyType = "web"
global.setwelcome = "type1"
global.autoblockcmd = false
global.autoReport = true
global.autoLevel = true
global.autoSticker = true
global.gamewaktu = 60
global.limitCount = 30
global.Intervalmsg = 1000
global.gris = '`'
global.fileStackApi ="AVKHbeyXsT0G9IKI01qenz"

global.skizo = 'memberaja'
global.Betabotz = 'LSd7Lq9S'
global.Lolhuman = '652c7664865e2b0e70929768',
global.FilestackApi = 'AJgyzwz0FQk67sTuplYoiz'  
global.gcounti = {
'prem' : 1000,
'user' : 5
} 
 



let d = new Date();
      let locale = "en";
      let gmt = new Date(0).getTime() - new Date("1 January 2024").getTime();
      let week = d.toLocaleDateString(locale, { weekday: "long" });
      const calender = d.toLocaleDateString("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      });

global.calender = calender;

const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
