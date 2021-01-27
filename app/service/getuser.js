const Service = require('egg').Service;

class GetUserService extends Service {
    async getuser() {
        const {ctx} = this;
        const userid = ctx.cookies.get('userid',{httpOnly:false,signed: false});
        console.log('userid getuser', userid);
        if (userid) {
            return ctx.model.User.findOne({_id: userid});
        } return null;
        
    }
}
module.exports =  GetUserService;