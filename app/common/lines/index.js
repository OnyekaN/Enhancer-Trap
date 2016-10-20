/* lines/index.js */
'use strict'
import LinesService from './lines.service'
import LinesComponent from './lines.component'

const Lines = angular
	.module('lines', [])
	.component('linesComponent', LinesComponent)
	.service('LinesService', LinesService)
	.config(($stateProvider, $urlRouterProvider) => {
		'ng-inject'
			$stateProvider
				.state('lines', { 
					url: '/',
					templateUrl: 'views/lines/lines.html',
					controller: 'LinesControl as vm',
					resolve: { 
						allLines: function(LinesService) {
							return LinesService.getLines()
						}
					}
			})
	})
	.name

export default Lines
