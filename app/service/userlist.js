const Service = require('egg').Service;

class UserlistService extends Service {
    async index() {
        const {ctx} = this;
        const db = ctx.model.User;
        const userType = ctx.query.type;
        return  db.find({userType})
    }
}

module.exports = UserlistService;