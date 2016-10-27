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
		.config([
			'$stateProvider',
			'$urlRouterProvider',
			($stateProvider, $urlRouterProvider) => {
				$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: '/home.html'
				})
				$urlRouterProvider.when('/', '/home')
				$urlRouterProvider.otherwise('/home')
			}])
		.name
})()


