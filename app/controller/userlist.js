const Controller = require('egg').Controller;

class UserListController extends Controller {
    async index() {
        const {ctx} = this;
        const res = await ctx.service.userlist.index();
        ctx.body = {
            code: 205,
            data: res
        }
    }

}

module.exports = UserListController;