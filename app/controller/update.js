'use strict';

const Controller = require('egg').Controller;

class UpdateController extends Controller {
  async index() {
    const { ctx } = this;
    let updateUser = await ctx.service.update.update();
    ctx.body = updateUser;
  }
}

module.exports = UpdateController;
