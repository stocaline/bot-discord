module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Tem nada tocando não fio`, ephemeral: true });

    if (!queue.previousTracks[1]) return inter.reply({ content: `Tem nada antes de ${inter.member}...`, ephemeral: true });

    await queue.back();

    inter.reply({ content:`Vamo pra **Proxima** `, ephemeral: true});
}
