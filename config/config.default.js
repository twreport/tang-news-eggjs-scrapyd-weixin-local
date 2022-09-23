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
  const config = exports = {
    mysql: {
      // 单数据库信息配置
      client: {
        // host
        host: '10.168.1.100',
        // 端口号
        port: '3306',
        // 用户名
        user: 'nodejs',
        // 密码
        password: 'tw7311',
        // 数据库名
        database: 'news',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1654133444497_8141';

  // add your middleware config here
  config.middleware = [];


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    ScrapydServerUrl: 'http://10.168.1.100:6801/',
    ScrapydServerUrl6803: 'http://10.168.1.100:6803/',
    FrequentLimit: 24 * 60 * 60,
    OutTimeLimit: 30 * 60,
    UinSlowLimit: 3,
    UinStopLimit: 2
    // ScrapydServerUrl: 'http://10.168.1.99:6800/'
  };

  return {
    ...config,
    ...userConfig,
  };
};
