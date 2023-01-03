module.exports = {
    name: 'back',
    description: "Volta para musica anterior",
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Tem nada tocando não fio ${inter.member}...`, ephemeral: true });

        if (!queue.previousTracks[1]) return inter.reply({ content: `Não tem nada antes de ${inter.member}...`, ephemeral: true });

        await queue.back();

        inter.reply({ content:`Tocando a musica **anterior**`});
    },
};