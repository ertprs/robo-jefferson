exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Olá, *${id.split("@s.whatsapp.net")[0]}* 👋️
Voce chamou o robo jefferson!✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Comandos / Command :
   
*[1] CRIADOR STICKER*
_${BotName} Enviará seu adesivo com uma legenda #sticker!_
Comando: #sticker
Exemplo: Envie uma imagem com legenda #sticker

*[2] ESCRITA AUTOMÁTICA*
_${BotName} irá enviar a escrita no livro de acordo com o que você enviou!_
Comando: #nulis [kata]
Exemplo: #nulis Olá sou o bot jefferson

*[3] RECURSOS PANTUN*
_${BotName} irá enviar rimas aleatoriamente! _!_
Comando: #pantun
Exemplo: #pantun

*[4] DOWNLOADER YOUTUBE*
_${BotName} irá enviar o downloader de um vídeo do yt de acordo com o seu comando!_
Comando: #yt [link]
Exemplo: #yt https://youtu.be/mundodainternet

*[5] RECURSOS DE CITAÇÕES*
_${BotName} irá enviar uma palavra aleatória de sabedoria!_
Comando: #quotes
Exemplo: #quotes 
_(no idima idonesio, de acordo com o codigo fonte)_

*[6] REFRESTER DA LINHA DE TEMPO*
_${BotName} irá enviar a imagem cogan / cecan de acordo com o que você enviou!_
Comando: #ptl [cewek/cowok]
Exemplo: #ptl cewek

*[7] RECURSOS DO ANIME*
_${BotName} irá enviar imagens de anime aleatoriamente!_
Comando: #randomanime
Exemplo: #randomanime

*[8] GOOGLE VOICE CHANGER*
_${BotName} irá enviar a voz vn do google de acordo com o comando que você enviar!_
Perintah: #ttsid [kata]
Contoh: #ttsid Jefferson alionco

*[9] RECURSOS DO QURANv*
_${BotName} irá enviar versos do Alcorão aleatoriamente!_
Comando: #quran
Exemplo: #quran

*[10] INFORMASI BOT*
_${BotName} irá enviar informações sobre o bot!_
Comando: #info
Exemplo: #info

*[11] FITUR SAY*
_${BotName} irá enviar as palavras de acordo com o que você enviar!_
Comando: #say [palvra]
Exemplo: #say olá linda estrela

*[12] YOUTUBE MP3 DOWNLOADER*
_${BotName} irá enviar a música de acordo com o pedido que você enviar!_
Comando: #ytmp3 [link]
Exempo: #ytmp3 https://youtu.be/xxxx

*[13] INSTAGRAM VIDEO/FOTO DOWNLOADER*
_${BotName} irá enviar vídeo / foto ig de acordo com o pedido que você enviar!_
Comando: #ig [link]
Exemplo: #ig https://instagram.com/xxxx

*[14] FACEBOOK VIDEO/FOTO DOWNLOADER*
_${BotName} irá enviar o vídeo / foto fb de acordo com o pedido que você enviar!_
Comando: #fb [link]
Exemplo: #fb https://facebook.com/xxxx

*[15] TWITTER VIDEO/FOTO DOWNLOADER*
_${BotName} irá enviar um vídeo/foto do twitter de acordo com o pedido que você enviar!_
Comando: #twt [link]
Exemplo: #twt https://twitter.com/xxxx

*[16] WIKIPEDIA*
_${BotName} iráenviar os resultados da wikipedia de acordo com o comando que você enviar!_
Comando: #wiki [query]
Exemplo: #wiki jefferson a

♻️ Nao se esqueça de doar para que o bot continue ativo #donate

📺 *Propaganda* :

✅ Siga a conta de administrador do instagram ${instagramlu}

⚠️ ÚLTIMAS INFORMAÇÕES DO COVID-19!

⚠️ POSITIVO: *${corohelp.confirmed.value}*
⚠️ CURADOS: *${corohelp.recovered.value}*
⚠️ MORTES: *${corohelp.deaths.value}*
⚠️ ATUALIZADO: *${corohelp.lastUpdate}*

♻️ _MANTENHA A SUA SAÚDE E USE SEMPRE UMA MÁSCARA!_

♻️ Quer anunciar no *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️

✳️ Official Grub [1] : ${grupch1}

✳️ Official Grub [2] : ${grupch2}

  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
