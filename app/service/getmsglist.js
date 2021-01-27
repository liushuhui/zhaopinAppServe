const Service = require('egg').Service;

class GetMsgListService extends Service {
    async index() {
        const {ctx} = this;
        const userDB = ctx.model.User;
        const chatDB = ctx.model.Chat;
        const userid = ctx.cookies.get('userid',{httpOnly:false,signed: false});
        console.log('userid-geimsglist', userid)
        //获取所有的用户
        const userList = await userDB.find();
        //一般方法
        // const users = {}
        // userList.forEach( item => {
        //     console.log('item',item);
        //     users[item._id] = {username: item.username, header: item.header}
        // })
        // 高逼格方法
        const users = userList.reduce((crv, prev) => {
            crv[prev.id] = {username: prev.username, header: prev.header};
            return crv;
        },{})

        const chatList = await chatDB.find({'$or': [{from: userid}, {to: userid}]});
        console.log('chatList', chatList);
        return {code: 205, data: {users, chatList}}
    }
}

module.exports = GetMsgListService;