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
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_59_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDY2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY5LFxuICAgICAgICA0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDU2LFxuICAgICAgICA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDYwLFxuICAgICAgICA4MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MixcbiAgICAgICAgMTU4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAyLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA3MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc0LFxuICAgICAgICA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMixcbiAgICAgICAgMTE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc5LFxuICAgICAgICA0MixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDM3LFxuICAgICAgICA1NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidks2b3RFQnhPS3dkTG1yaDE0dXJBOXA3MklvSHkyQnJjcXE0b0NaaGdEOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibUR3cmFNUjJSbTZybnJ0bWRzanpad1wiLFxuICBcInBob25lSWRcIjogXCJiNDU1OTVkZS1kYmY1LTRiNmUtOTIyNy0wNjc5YzM0NTVhMmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEzLFxuICAgICAgMTcxLFxuICAgICAgMCxcbiAgICAgIDEyMixcbiAgICAgIDM5LFxuICAgICAgMjEzLFxuICAgICAgMzcsXG4gICAgICAxMTksXG4gICAgICAxNTYsXG4gICAgICAxNjAsXG4gICAgICA5NixcbiAgICAgIDc0LFxuICAgICAgMjQwLFxuICAgICAgNTQsXG4gICAgICAyNDMsXG4gICAgICA4MyxcbiAgICAgIDE3MixcbiAgICAgIDE5MCxcbiAgICAgIDExNSxcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OCxcbiAgICAgIDE3NSxcbiAgICAgIDE5MCxcbiAgICAgIDEzNixcbiAgICAgIDE1MyxcbiAgICAgIDEyNCxcbiAgICAgIDE0NixcbiAgICAgIDE0MixcbiAgICAgIDcxLFxuICAgICAgMjA5LFxuICAgICAgMjAxLFxuICAgICAgMTg3LFxuICAgICAgMzAsXG4gICAgICAxMDEsXG4gICAgICAxMSxcbiAgICAgIDk4LFxuICAgICAgMjE2LFxuICAgICAgMTcsXG4gICAgICAxNTUsXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSRFc0NlZKRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTQ2Mzc1NjEwOjc4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2KfZiNuM2YDbrNmA26fbm9mA26zwnYaK2YDYsyDYrNmA2bnZgNmA2YDbrNmA26fbm9mA26zwnYaK2YDZgNmAXCIsXG4gICAgXCJsaWRcIjogXCIyMzU3MzM5MjczNTg1NDE6NzhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1NVek9NRkVJaXNyYlFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWUjFaeksvZlVMRmFVanNKbzdCcy9kVFdCUFdZQ21lSU1rVFRZc281clQwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIktPc25YTllRenVtNnZqVGcyMTBSMHBuMWtNOFZwYmJiMWY1VGcxVGIyalNranFoc1VYR1krZU82U1FWRm5ZMGxLc3lvQjJIc3h2NlJkQmV2bFF3a0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNTeEk4RW5OR2l2Q0ZYVjVoUDhmSzY2Z0JPTTR6anlQdWVZMkNvWi9TUEM5UUdDNmVMcFhIMHVWVGhrQ0xUN3hvSk50RWQzaGUybzFDeWhMdlZacmhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE0NjM3NTYxMDo3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0MDc1NjRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "awais",
  packname: process.env.PACK_NAME || "jutt",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
