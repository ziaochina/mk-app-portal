import { config, start, componentFactory } from 'mk-meta-engine'
import myConfig  from './config'

import mk_app_portal_about from './apps/mk-app-portal/apps/mk-template-portal-about/index.js'
import mk_app_portal_app1 from './apps/mk-app-portal/apps/mk-template-portal-app1/index.js'
import mk_app_portal_app2 from './apps/mk-app-portal/apps/mk-template-portal-app2/index.js'
import mk_app_portal from './apps/mk-app-portal/index.js'

const apps = {
	[mk_app_portal_about.name]:mk_app_portal_about,	
	[mk_app_portal_app1.name]:mk_app_portal_app1,	
	[mk_app_portal_app2.name]:mk_app_portal_app2,	
	[mk_app_portal.name]:mk_app_portal,	
}


config(myConfig({apps}))


import * as mkComponents from 'mk-component'

Object.keys(mkComponents).forEach(key=>{
	componentFactory.registerComponent(key, mkComponents[key])
})
	

start()