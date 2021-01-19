const md5 = require('blueimp-md5')
const Service = require('egg').Service;
class UserService extends Service {
    async add() {
        const { ctx }  = this;
        const res = {};
        const {username,password, userType} = ctx.request.body;
        const db = ctx.model.User;
        const findResult = await db.findOne({username});
        if (!findResult) {
            ctx.cookies.set('userid', username._id, {maxAge: 1000*60*60*24});
            console.log('ctx1111222',ctx.cookies);
           const result = db.create({username, userType, password});
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