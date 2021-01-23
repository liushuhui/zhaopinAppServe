const Service = require('egg').Service;
class LoginService extends Service {
    async login() {
        const { ctx }  = this;
        const res = {};
        const {username,password, userType} = ctx.request.body;
        const db = ctx.model.User;
        const findResult = await db.findOne({username});
        if (findResult && (password === findResult.password)) {
            ctx.cookies.set('userid', findResult._id, {maxAge: 1000*60*60*24, httpOnly:false});
            res.data = {username, userType: findResult.userType};
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