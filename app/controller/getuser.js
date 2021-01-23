'use strict'

const Controller = require('egg').Controller;

class GetUserController extends Controller {
    async getuser() {
        const {ctx} = this;
        const result = await ctx.service.getuser.getuser();
        if (!!result) {
            ctx.body = {
                code: 205,
                data: result
            }
        } else {
            ctx.body = {
                code: 400,
                msg: '请先登录'
            }
        }
    }
}

module.exports = GetUserController