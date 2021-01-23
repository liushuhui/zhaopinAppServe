module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
        username: { type: String, required: true },
        password: { type: String, required: true},
        userType:{type : String, required: true}, //用户类型
        header: {type: String}, // 头像名称
        post: {type: String}, // 职位
        info: {type: String}, // 个人或职位简介
        company: {type: String}, // 公司名称
        salary: {type: String} // 月薪
      });

    return mongoose.model('User', UserSchema)
}