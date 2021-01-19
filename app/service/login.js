const md5 = require('blueimp-md5')
const Service = require('egg').Service;
class LoginService extends Service {
    async login() {
        const { ctx }  = this;
        const res = {};
        const {username,password} = ctx.request.body;
        const db = ctx.model.User;
        const findResult = await db.findOne({username});
        console.log('findResult',findResult);
        console.log('password',password);
        if (findResult && (password === findResult.password)) {
            ctx.cookies.set('userid', username._id, {maxAge: 1000*60*60*24});
            res.data = {username};
            res.code = 205;
            res.msg = '登录成功'
        } 
        else if(findResult && (password !== findResult.password)) {
            res.code = 400;
            res.msg = '密码错误';
        }
        else {
            res.code = 400;
            res.msg = '该用户不存在';
        }
        return res;
    }
}

module.exports = LoginService;