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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_14_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDUxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAzLFxuICAgICAgICA5NCxcbiAgICAgICAgMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDExLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI3LFxuICAgICAgICA2NixcbiAgICAgICAgMTA4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgOTUsXG4gICAgICAgIDk1LFxuICAgICAgICA3MyxcbiAgICAgICAgODgsXG4gICAgICAgIDgxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA2LFxuICAgICAgICAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDM2LFxuICAgICAgICA3MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDU2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDU0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAzNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxODQsXG4gICAgICAgIDExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVy9FTXRZd054K1U1UVlLTVRXTXdCM2F5QXg3YXFhOWtudVpKVHB4Q25wcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwOTAwMTkwMjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE1QkY3QTVFRDM2RTVEQkE4OThFMkYyREFCN0ZGRDYzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQwNTY5MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA5MDAxOTAyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0ZEQkU1NzcwNzBFQ0QxODMwNTE4RUU2MTFBRThCRUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDA1NjkxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFndzhONmt2U1hlZmxMZjk5QUhTQlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjhmZDM0MDEtZDc1OS00NGNkLWI4ZTUtNjU4ODVjZTZkNjQzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNSxcbiAgICAgIDE2MSxcbiAgICAgIDE4NixcbiAgICAgIDkyLFxuICAgICAgNDIsXG4gICAgICA1MixcbiAgICAgIDEyNCxcbiAgICAgIDYsXG4gICAgICAzOSxcbiAgICAgIDE2NSxcbiAgICAgIDY0LFxuICAgICAgMTE4LFxuICAgICAgMjIyLFxuICAgICAgMjIxLFxuICAgICAgOTUsXG4gICAgICAxMSxcbiAgICAgIDkwLFxuICAgICAgMTgyLFxuICAgICAgNTAsXG4gICAgICAxMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU1LFxuICAgICAgNzIsXG4gICAgICAxNTgsXG4gICAgICA1MCxcbiAgICAgIDE1MCxcbiAgICAgIDIyNCxcbiAgICAgIDYsXG4gICAgICAyMTAsXG4gICAgICAzNSxcbiAgICAgIDExMCxcbiAgICAgIDI1LFxuICAgICAgMjMzLFxuICAgICAgMTY1LFxuICAgICAgNDcsXG4gICAgICA0OCxcbiAgICAgIDE2MCxcbiAgICAgIDU2LFxuICAgICAgMTAwLFxuICAgICAgMjExLFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkM5Nlc5NlBKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwOTAwMTkwMjI6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM3MjI4NzEwMTcwNzg4OjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi2JRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNUGcvQUlROHFIcXRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInpNTE9ZWnFkRm44RFZQQ1pSdVdrcGhVMm1QY0tLd0VVMW9LRUlGZlhlQzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQnZ2dTlWajRDUG55QUZiNTYwZTZnb3VaZFJ6L1BhZ2tHWVBvL1kyN3lMaWhCZGRFTEtGc0JHUmdJTWRiOUZkQjZFTFZIanVTQ1RONENKL1pZQnMzREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZDUycXFWaE5vV05VRExPL1hKRFVpaTBMODk5ZjU2R3pkem4zQVArL1g1L1p0Mmc4djZkYkJVRUtYQ05ySUhuQXRDTlRRRisxeDBYVnBidlVGcGo4Z2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDkwMDE5MDIyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQwNTY4NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5XcFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTldwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV2QxZE80VVNmZmM0UllCZm0wUUNFYjJick9sdlFTeWtsSVorVGF6UWdnYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MjM4Mjc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0MDU2ODg2NDBcIn0iCn0="  // PUT your SESSION_ID 


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
