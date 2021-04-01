let handler = async m => m.reply(`
  ^    ^    ^    ^    ^  
 /A\  /N\  /O\  /N\  /S\ 
<___><___><___><___><___>




                                        
`.trim()) 
handler.help = ['DarkZE']
handler.tags = ['info']
handler.command = /^darkze$/i

module.exports = handler
