
import config from './config'
import * as data from './data'
import './mock.js'
import './style.less'

export default {
    name: "mk-app-portal",
    version: "1.0.48",
    description: "mk-app-portal",
    meta: data.getMeta(),
    components: [],
    config: config,
    load: (cb) => {
        cb(require('./component'), require('./action'), require('./reducer'))
	}
}