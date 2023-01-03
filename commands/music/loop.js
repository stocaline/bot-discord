const { QueueRepeatMode } = require('discord-player');
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'loop',
    description: 'enable or disable looping of song\'s or the whole queue',
    voiceChannel: true,
    options: [
        {
        name: 'action' ,
        description: 'what action you want to preform on the loop',
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: [
            { name: 'Queue', value: 'enable_loop_queue' },
            { name: 'Disable', value: 'disable_loop'},
            { name: 'Song', value: 'enable_loop_song' },
        ],
    }
    ],
    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Tem nada tocando não fio ${inter.member}...`, ephemeral: true });
        switch (inter.options._hoistedOptions.map(x => x.value).toString()) {
            case 'enable_loop_queue': {
                if (queue.repeatMode === 1) return inter.reply({ content:`Desativa o loop primeiro fio (/loop Disable) ${inter.member}...`, ephemeral: true });

                const success = queue.setRepeatMode( QueueRepeatMode.QUEUE);

                return inter.reply({ content:success ? `Vamo de loop infinite` : `Tem alguma coisa errada com ${inter.member}...` });
                break
            }
            case 'disable_loop': {
                const success = queue.setRepeatMode(QueueRepeatMode.OFF);

                return inter.reply({ content:success ? `O loop foi **desabilitado**` : `Tem alguma coisa errada com ${inter.member}...` });
                break
            }
            case 'enable_loop_song': {
                if (queue.repeatMode === 2) return inter.reply({ content:`You must first disable the current music in the loop mode (/loop Disable) ${inter.member}...`, ephemeral: true });

                const success = queue.setRepeatMode( QueueRepeatMode.TRACK);
                
                return inter.reply({ content:success ? `Vou ficar repetindo essa musica até você dizer chega! (você pode dizer chega com /loop disable)` : `Tem alguma coisa errada com ${inter.member}...` });
                break
            }
        }
       
    },
};