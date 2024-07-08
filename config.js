const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Raohamza6";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/GvyhbMHjQ4NLvrU4PSJXw6";
global.website=process.env.GURL || "https://chat.whatsapp.com/GvyhbMHjQ4NLvrU4PSJXw6" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a11bd5591fc23421fdb97.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ༆❤️⃝≛𓆩нᷓαᷢмͣzͦαᷓ𓆪≛⃝🧸༆" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923090019022";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923090019022,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_53_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODIsXG4gICAgICAgIDY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ5LFxuICAgICAgICA3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMixcbiAgICAgICAgMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NixcbiAgICAgICAgMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY3LFxuICAgICAgICA2NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDU1LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwLFxuICAgICAgICAxMixcbiAgICAgICAgNzUsXG4gICAgICAgIDAsXG4gICAgICAgIDMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDQwLFxuICAgICAgICA5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDkxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMyxcbiAgICAgICAgMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDY2LFxuICAgICAgICA3OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrMEZRVlJOZUxTZWlmRE16WTRqSnEwWVNyTzBlcEZBWG5zU1lHU1dZV1NZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyUFZMMWIteVN0ZUt3QWFTeW10VEZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI0M2JjOWY5LTI1MmItNGNmMy04MDc4LThkZDZlMjE5OWNmMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICAzOSxcbiAgICAgIDIxNSxcbiAgICAgIDY3LFxuICAgICAgMjQ0LFxuICAgICAgMTM1LFxuICAgICAgMTY4LFxuICAgICAgNTgsXG4gICAgICAyMjIsXG4gICAgICAzMCxcbiAgICAgIDIyOCxcbiAgICAgIDI0MyxcbiAgICAgIDExMSxcbiAgICAgIDI1MSxcbiAgICAgIDIxNSxcbiAgICAgIDIxOSxcbiAgICAgIDI1MCxcbiAgICAgIDMzLFxuICAgICAgMTk1LFxuICAgICAgMTE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5LFxuICAgICAgMjM0LFxuICAgICAgMTI1LFxuICAgICAgMTQ3LFxuICAgICAgMTY5LFxuICAgICAgMjU1LFxuICAgICAgMTU2LFxuICAgICAgMTk1LFxuICAgICAgMjIxLFxuICAgICAgMTQwLFxuICAgICAgMTgxLFxuICAgICAgNzIsXG4gICAgICAxMDIsXG4gICAgICAxNjQsXG4gICAgICAyMSxcbiAgICAgIDEyOSxcbiAgICAgIDE5NCxcbiAgICAgIDUsXG4gICAgICAyNDEsXG4gICAgICAxNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjNaRzVCSzVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA1MTY5MTI0NToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjgwMjM4NDc5MTQyOTg1OjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00zRG91VUhFTFdLcjdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZDNwN3hUcEcrRlRUc05iMitGTUxwV1hINkFsRlYxSnIvakZTaktzQW9Scz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaRjdFYWFtM1ExREJVMUY2ZnlNaVhqWHhaOFUra1pQNzNFYWlxazhrSVhKVU1LcUFOQy9rZVkxWHhHM1k4Vzg4UjdhWURuYWhGa0tUNU04N2ExNXNBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyU1NPOHlFb2JXMmFKdDZHRVNwb3VxMXVuZ3hnZk44a29Td2NOQnhOVWhnUk1xcytQVDJaY0dmQjVEODYwT3AxemxlV1FkbWpzM2N0dmYzSXhPdzBDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNTE2OTEyNDU6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0MzYwMjRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "saqi jutt",
  ownername:process.env.OWNER_NAME|| "Hamza",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
