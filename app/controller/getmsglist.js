'use strict';

const Controller = require('egg').Controller;

class GetMsgListController extends Controller {
  async index() {
    const { ctx } = this;
    let updateUser = await ctx.service.getmsglist.index();
    ctx.body = updateUser;
  }
}

module.exports = GetMsgListController;
