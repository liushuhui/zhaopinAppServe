const Service = require('egg').Service;
class UserService extends Service {
    async add() {
        const { ctx }  = this;
        const res = {};
        const {username,password, userType} = ctx.request.body;
        const db = ctx.model.User;
        const findResult = await db.findOne({username});
        if (!findResult) {
            const result = await db.create({username, userType, password});
            ctx.cookies.set('userid', result._id, {maxAge: 1000*60*60*24, httpOnly:false});
            console.log('result',result)
            res.data = {username,userType};
            res.code = 205;
            res.msg = '注册成功';
        } else {
            res.code = 400;
            res.msg = '该用户已存在';
        }
        return res;
    }
}

module.exports = UserService;