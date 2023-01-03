const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'queue',
    description: 'Get the songs in the queue',
    voiceChannel: true,

    execute({ client, inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `Tem nada tocando não fio ${inter.member}...`, ephemeral: true });

        if (!queue.tracks[0]) return  inter.reply({ content: `Não tem musica depois dessa ${inter.member}...`, ephemeral: true });

        const methods = ['', '🔁', '🔂'];

        const songs = queue.tracks.length;

        const nextSongs = songs > 5 ? `e **${songs - 5}** outras musicas(s)...` : `Na playlist **${songs}** song(s)...`;

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`)

        const embed = new EmbedBuilder()
        .setColor('#53FF47')
        .setThumbnail(inter.guild.iconURL({ size: 2048, dynamic: true }))
        .setAuthor({name: `Server queue - ${inter.guild.name} ${methods[queue.repeatMode]}`, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })})
        .setDescription(`Tocando ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`)
        .setTimestamp()

        inter.reply({ embeds: [embed] });
    },
};