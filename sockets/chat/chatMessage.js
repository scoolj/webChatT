const User = require('../../models/User');

module.exports = (io, socket) => {
    socket.on('chat message', async (msg) => {
        const user = await User.findOne({ socketId: socket.id });

        io.emit('chat message', { username: user.username, message: msg.message, userstate:user.userstate, usercountry:user.usercountry, role:user.role });
    });
}