module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Tem nada tocando não fio...`, ephemeral: true });
    
    const success = queue.skip();

    return inter.reply({ content: success ? `Bora pra proxima que essa é paia (${queue.current.title})` : `Tem alguma coisa errada com ${inter.member}...`, ephemeral: true});
}