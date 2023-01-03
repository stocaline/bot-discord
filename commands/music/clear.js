module.exports = {
    name: 'clear',
    description: 'Limpa a fila de musica',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Tem nada tocando não fio ${inter.member}...`, ephemeral: true });

        if (!queue.tracks[0]) return inter.reply({ content: `Não tem nada pra tocar depois${inter.member}...`, ephemeral: true });

        await queue.clear();

        inter.reply(`Limpei a fila pro ce 🗑️`);
    },
};