const Subscription = require('egg').Subscription;

class WeixinDriver extends Subscription {
    static get schedule() {
        return {
            cron: '0 5/10 7-23 * * ?',
            type: 'worker'
        };
    }
    async subscribe() {
        console.log("OK")
        await this.ctx.service.weixin6803.start();
    }
}

module.exports = WeixinDriver;