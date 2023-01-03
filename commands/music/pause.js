module.exports = {
    name: 'pause',
    description: 'pause a musica',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `Tem musica tocando não fio ${inter.member}...`, ephemeral: true });
        
        if(queue.connection.paused) return inter.reply({content: 'Pausei pro ce!', ephemeral: true})

        if(queue.connection.paused) return inter.reply({content: `Pausei pro ce, ${inter.member}...`, ephemeral: true})

        const success = queue.setPaused(true);
        
        return inter.reply({ content: success ? `Ta tocando ${queue.current.title} pausar ✅` : `Tem coisa errada aqui ${inter.member}... tentar dnv?` });
    },
};
