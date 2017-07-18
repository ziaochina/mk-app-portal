import logo from './img/logo.png'

var _options = {
	goAfterLogout: {
		appName: 'login',
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
		_options = { ..._options, ...options }
	}
}

config.getCurrent = () => _options

export default config