let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
  let isEnable = /true|enable|(turn)?on/i.test(command)
  let chat = global.DATABASE._data.chats[m.chat]
  let user = global.DATABASE._data.users[m.sender]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
    case 'antilink':
      chat.antiLink = isEnable
      break
    default:
      return m.reply(`
List option: welcome | delete | public | antilink | autolevelup

Contoh:
${usedPrefix}enable welcome
${usedPrefix}disable welcome
`.trim())
  }
  m.reply(`
*${type}* berhasil di *${isEnable ? 'nyala' : 'mati'}kan* ${isAll ? 'untuk bot ini' : isUser ? '' : 'untuk chat ini'}
`.trim())
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff))$/i

module.exports = handler
