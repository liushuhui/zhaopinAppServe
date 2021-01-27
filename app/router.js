'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.post('/register', controller.register.index);
  router.post('/login', controller.login.index);
  router.post('/update', controller.update.index);
  router.get('/user', controller.getuser.getuser);
  router.get('/userlist', controller.userlist.index);
  router.get('/msglist', controller.getmsglist.index)
  // app.io.of('/')
  io.route('postMsg', io.controller.chat.index);
  // app.io.of('/chat')
  // io.of('/chat').route('chat',io.controller.chat.index);
};
