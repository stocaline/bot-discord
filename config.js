module.exports = {
    app: {
        token: '',
        playing: 'OPA BÃO',
        global: true,
    },

    opt: {
        maxVol: 100,
        leaveOnEnd: false,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
