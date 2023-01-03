module.exports = {
    name: 'stop',
    description: 'stop the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content:`Não tem musica tocando ${inter.member}...`, ephemeral: true });

        queue.destroy();

        inter.reply({ content: `Parou o batidão, hora de mimir`});
    },
};