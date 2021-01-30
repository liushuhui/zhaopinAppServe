const Service = require('egg').Service;

class ReadMsgService extends Service {
    async index() {
        const {ctx} = this;
        const from = ctx.request.body.from;
        const to = ctx.cookies.get('userid');
        const db = ctx.model.Chat;
        const res = await db.update({from, to}, {read: true}, {multi: true});
        console.log('res readmsg', res);
        return res.nModified;
    }
}

module.exports = ReadMsgService;