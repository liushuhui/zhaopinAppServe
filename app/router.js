'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/register', controller.register.index);
  router.post('/login', controller.login.index);
  router.post('/update', controller.update.index);
  router.get('/user', controller.getuser.getuser);
  router.get('/userlist', controller.userlist.index)
};
