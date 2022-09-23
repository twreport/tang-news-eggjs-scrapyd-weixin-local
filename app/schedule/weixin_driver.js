const Subscription = require('egg').Subscription;

class WeixinDriver extends Subscription {
    static get schedule() {
        return {
            cron: '0 0/10 7-23 * * ?',
            type: 'worker'
        };
    }
    async subscribe() {
        console.log("OK")
        await this.ctx.service.weixin.start();
    }
}

module.exports = WeixinDriver;