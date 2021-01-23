const Service = require('egg').Service;
class UpdateService extends Service {
   async update() {
       const {ctx} = this;
       const db = ctx.model.User;
       const userid = ctx.cookies.get('userid');
       const user = ctx.request.body;
       let res = {}
       console.log('userid update', userid);
       if (!userid) {
           res.code = 400;
           res.msg = '请先登录';
           return res;
       } else {
           console.log('user update', user);
           const findResult = await db.findByIdAndUpdate({_id: userid}, user);
           const {_id, username, userType} = findResult;
           console.log('findResult update', findResult);
           if (!findResult) {
            ctx.cookies.set('userid', null);
            res.code = 400;
            res.msg = '请先登录';
            return res;
           }
           res.code = 205;
           res.data = Object.assign({_id, username, userType}, user);
           res.msg = '更新成功';
           return res;
       }
   }
}

module.exports = UpdateService;