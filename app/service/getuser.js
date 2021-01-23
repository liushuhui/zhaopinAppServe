const Service = require('egg').Service;

class GetUserService extends Service {
    async getuser() {
        const {ctx} = this;
        const userid = ctx.cookies.get('userid');
        if (userid) {
            return ctx.model.User.findOne({_id: userid});
        } return null;
        
    }
}
module.exports =  GetUserService;