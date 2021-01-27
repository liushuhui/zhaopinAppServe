'use strict';
module.exports = () => {
    return async(ctx, next) => {
        console.log('服务端已经链接');
        ctx.socket.emit('connection', '服务端已经链接');
        await next();
    }
}

