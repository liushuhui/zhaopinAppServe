'use strict';

const Controller = require('egg').Controller;

class RegisterController extends Controller {
  async index() {
    const { ctx } = this;
    let addUser = await ctx.service.register.add();
    console.log('addUser121',addUser);
    ctx.body = addUser;
  }
}

module.exports = RegisterController;
