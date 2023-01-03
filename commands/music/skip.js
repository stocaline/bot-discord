module.exports = {
    name: 'skip',
    description: 'stop the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

         if (!queue || !queue.playing) return inter.reply({ content:`Tem nada tocando não fio ${inter.member}...`, ephemeral: true });

        const success = queue.skip();

        return inter.reply({ content: success ? `Pulei a musica ${queue.current.title}` : `Tem alguma coisa errada com o ${inter.member}...`});
    },
};