const Controller = require('egg').Controller;

class ChatController extends Controller {
  async index() {
    const { ctx } = this;
    const message = ctx.args[0];
    console.log('ctx.args[0]',message);
    const awitRes = await ctx.service.chat.index(message);
    console.log('awitRes', awitRes);
    // ctx.app.io.emit()是向所有人广播消息
    await ctx.app.io.emit('getMsg', `Hi! I've client  message : ${awitRes}`);
  }
}

module.exports = ChatController;