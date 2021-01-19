'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this; 
    let login = await ctx.service.login.login()
    ctx.body = login;
  }
}

module.exports = LoginController;
