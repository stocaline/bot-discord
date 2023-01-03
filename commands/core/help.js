const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: "Mostra todos os meus comandos!",
    showHelp: false,

    execute({ client, inter }) {
        const commands = client.commands.filter(x => x.showHelp !== false);

        const embed = new EmbedBuilder()
        .setColor('#53FF47')
        .addFields([ { name: `Enabled - ${commands.size}`, value: commands.map(x => `\`${x.name}\``).join(' | ') } ])
        .setTimestamp()
        .setFooter({ text: 'Precisando, tamo ai', iconURL: inter.member.avatarURL({ dynamic: true })});

        inter.reply({ embeds: [embed] });
    },
};