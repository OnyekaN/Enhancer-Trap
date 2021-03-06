/* /app.js */
'use strict'
import uiRouter from 'angular-ui-router';
import Common from './common/index';

(() => {
	angular
		.module('eTRapp', [
			uiRouter,
			Common,
		])
		.config([
			'$stateProvider',
			'$urlRouterProvider',
			'$locationProvider',
			($stateProvider, $urlRouterProvider) => {
				$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: 'views/home.html'
				})
				.state('about', {
					url: '/about',
					templateUrl: 'views/about.html'
				})
				$urlRouterProvider.when('/', '/home');
				$urlRouterProvider.otherwise('/home');
				// $locationProvider.html5Mode(true);
			}])
		.name;
})()


