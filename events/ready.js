module.exports = async (client) => {
    console.log(`Sistema conectado no ${client.user.username}\n-> Em ${client.guilds.cache.size} servidores`);
    client.user.setActivity(client.config.app.playing);

    
};