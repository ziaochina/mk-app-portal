import { Toast, Notification, Modal } from 'mk-component'
import { fetch } from 'mk-utils'

import './mock.js' //启用mock
fetch.config({
	mock: true, //启用mock
	after: (response) => {
		if (response.result) {
			return response.value
		}
	}
})

var _options = {}

function config(options) {
	Object.assign(_options, options)

	_options.apps && _options.apps.config({
		//'*': { webapi } //正式网站应该有一个完整webapi对象，提供所有web请求函数
	})

	_options.targetDomId = 'app'
	_options.startAppName = 'mk-app-portal' //mk-app-root
	//options.apps['mk-app-root'].config({defaultAppName:'app-demo'})

	_options.toast = Toast
	_options.notification = Notification
	_options.modal = Modal
	return _options
}

config.current = _options

export default config