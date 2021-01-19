'use strict';

const Controller = require('egg').Controller;

class RegisterController extends Controller {
  async index() {
    const { ctx } = this;
    let addUser = await ctx.service.register.add();
    console.log('addUser121',addUser);
    ctx.body = addUser;
    // if (addUser.code === 400) {
    //   ctx.throw(400, addUser.msg)
    // }
  }
}

module.exports = RegisterController;
