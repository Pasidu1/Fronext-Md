const {cmd , commands} = require('../command')
const fg = require(`api-dylux`)
const yts = require(`yt-search`)


cmd({
    pattern: "song",
    desc: "download song",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please give me url or title❓*")  
const search = awit yts(q)  
const data = search.videos[0]:
const urlurl

let desc =`
🌟*FRONEXT MD SONG DOWNLOAD*🌟

title: ${data.title}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

*MADE BY CYBER FROLY 🧡*
`  
await conn.sendMassage(frome,{imge:{url: data.thumbnail},caption:desc},{quoted:mek});  

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_urlurl

//send audio + document message
await conn.sendMessage(from,{audio: {url}:downloadUrl,mimetype:"audio/mpeg"},{quoted:mek}) 
await conn.sendMessage(from,{document: {url}:downloadUrl,mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"*MADE BY CYBER FROLY*"},{quoted:mek})  




}catch(e){
console.log(e)
reply(`${e}`)
{
})

//============video-dl============

cmd({
    pattern: "video",
    desc: "download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please give me url or title❓*")  
const search = awit yts(q)  
const data = search.videos[0]:
const urlurl

let desc =`
🌟*FRONEXT MD VIDEO DOWNLOAD*🌟

title: ${data.title}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

*MADE BY CYBER FROLY 🧡*
`  
await conn.sendMassage(frome,{imge:{url: data.thumbnail},caption:desc},{quoted:mek});  

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_urlurl

//send video+ document message
await conn.sendMessage(from,{video: {url}:downloadUrl,mimetype:"video/mp4",caption:"*MADE BY CYBER FROLY🧡*"},{quoted:mek}) 
await conn.sendMessage(from,{document: {url}:downloadUrl,mimetype:"video/mp4",fileName:data.title + ".mp4"},{quoted:mek}) 
    





}catch(e){
console.log(e)
reply(`${e}`)
{
})  


