const { ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');

player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    const embed = new EmbedBuilder()
    .setAuthor({name: `Comecei a tocar ${track.title} no ${queue.connection.channel.name} 🎧`, iconURL: track.requestedBy.avatarURL()})
    .setColor('#13f857')

    const back = new ButtonBuilder()
    .setLabel('Voltar')
    .setCustomId(JSON.stringify({ffb: 'back'}))
    .setStyle('Primary')

    const skip = new ButtonBuilder()
    .setLabel('Pular')
    .setCustomId(JSON.stringify({ffb: 'skip'}))
    .setStyle('Primary')

    const resumepause = new ButtonBuilder()
    .setLabel('Pausar e Despausar')
    .setCustomId(JSON.stringify({ffb: 'resume&pause'}))
    .setStyle('Danger')

    const loop = new ButtonBuilder()
    .setLabel('Loop')
    .setCustomId(JSON.stringify({ffb: 'loop'}))
    .setStyle('Secondary')
    
    const queuebutton = new ButtonBuilder()
    .setLabel('Fila')
    .setCustomId(JSON.stringify({ffb: 'queue'}))
    .setStyle('Secondary')

    const row1 = new ActionRowBuilder().addComponents(back, loop, resumepause, queuebutton, skip)
    queue.metadata.send({ embeds: [embed], components: [row1] })
});

player.on('trackAdd', (queue, track) => {
   
    queue.metadata.send(`Coloquei ${track.title} pra tocar`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Tive que sai, mais deixei se preucupa não que o pai volta');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('E eu só loko de ficar em call sozinho -_-');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Terminei de tocar');
});

player.on('tracksAdd', (queue, tracks) => {
    queue.metadata.send(`Coloquei as musicas na playlist fio`);
});