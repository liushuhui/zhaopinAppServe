const Service = require('egg').Service;

class ChatService extends Service {
    async index(message) {
        const {ctx} = this;
        const db = ctx.model.Chat;
        const {from, to, content} = message;
        const chat_id = [from, to].sort().join('_');
        console.log('[from, to]', [from, to]);
        const create_time = Date.now();
        return db.create({from, to, content,chat_id, create_time});
    }
}

module.exports = ChatService;