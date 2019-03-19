import JsonP from 'jsonp'

const ERR_OK = '1'

export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, (err, res) => {
                if (res.status === ERR_OK) {
                    resolve(res)
                } else {
                    reject(res.info)
                }
            })
        })
    }
}
