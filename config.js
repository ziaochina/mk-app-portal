import logo from './img/logo.png'
import webapi from './webapi'

var _options = {
	webapi,
	goAfterLogout: {
		appName: 'mk-app-login',
		appParams: {}
	},
	menu: [{
		key: '1',
		name: 'about',
		app: 'mk-app-portal-about'
	}, {
		key: '2',
		name: 'apps',
		children: [{
			key: '201',
			name: 'app1',
			app: 'mk-app-portal-app1'
		}, {
			key: '202',
			name: 'app2',
			app: 'mk-app-portal-app2'
		}]
	}],
	menuDefaultSelectedKeys: ['1'],
	menuDefaultOpenKeys: ['2'],
	defaultContent: {
		appName: 'mk-app-portal-about',
		appParams: {}
	},
	logo
}

function config(options) {
	if (options) {
		Object.assign(_options, options)
	}
}

config.current = _options

export default config