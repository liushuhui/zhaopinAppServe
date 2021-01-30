const Controller = require('egg').Controller;

class ChatController extends Controller {
  async index() {
    const { ctx } = this;
    const message = ctx.args[0];
    console.log('ctx.args[0]',message);
    const awitRes = await ctx.service.chat.index(message);
    console.log('awitRes', awitRes);
    // ctx.io.emit()是向所有人广播消息
    ctx.app.io.sockets.emit('getMsg', awitRes);
  }
}

module.exports = ChatController;