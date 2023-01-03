module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Não tem nada tocando não fio :/`, ephemeral: true });

    const success = queue.setPaused(false);
    
    if (!success) queue.setPaused(true);
    

    return inter.reply({ content: `${success ? `Tira o pé do chão que ta tocando ${queue.current.title}` : `Tava tocando ${queue.current.title} até o incopetente ai pausar`}`, ephemeral: true});
}