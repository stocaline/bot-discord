const ms = require('ms');

module.exports = {
    name: 'ping',
    description: "Mostra o ping do bot!",
    async execute({ client, inter }) {

        const m = await inter.reply("Ping?")
        inter.editReply(`O Ping da API é de ${Math.round(client.ws.ping)}ms 🛰️, A ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })}atras`)

    },
};