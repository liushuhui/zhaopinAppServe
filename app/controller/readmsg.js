'use strict';

const Controller = require('egg').Controller;

class ReadMsgController extends Controller {
  async index() {
    const { ctx } = this;
    let readMsg = await ctx.service.readMsg.index();
    console.log('readMsg', readMsg);
    ctx.body = {
        code: 205,
        data: readMsg
    };
  }
}

module.exports = ReadMsgController;
