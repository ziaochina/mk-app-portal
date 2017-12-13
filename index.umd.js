__webpack_public_path__ = window["__pub_mk-app-portal__"];

const data = require('./data')
const config = require('./config')
require('./mock.js')
require('./style.less')

export default {
    name: "mk-app-portal",
    version: "1.0.50",
    description: "mk-app-portal",
    meta: data.getMeta(),
    components: [],
    config: config,
    load: (cb) => {
        cb(require('./component'), require('./action'), require('./reducer'))
	}
}