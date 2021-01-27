/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1610727191288_7038';

  // add your middleware config here
  config.middleware = [];
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/boss',
      options: {}
    }

  }
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: [ 'http://localhost:7001', 'http://127.0.0.1:7001' ]
  }
  config.io = {
    init: { }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: ['connection'],
        packetMiddleware: [],
      },
      '/chat': {
        connectionMiddleware: ['connection'],
        packetMiddleware: [],
      },
    },
  }
  config.cors = {
    origin: 'http://localhost:3000', //只允许这个域进行访问接口
    credentials: true, // 允许跨域请求携带cookies
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
