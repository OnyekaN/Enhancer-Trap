/* /app.js */
'use strict'
import uiRouter from 'angular-ui-router'
import Common from './common/index'

(() => {
	angular
		.module('eTRapp', [
			uiRouter,
			Common,
		])
		.name
})()



//don't forget to use "Controller.$inject = ['factory&||service']" for
//
//dependencies
//
