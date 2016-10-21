/* lines/index.js */
'use strict'
import LinesService from './lines.service'
import LinesComponent from './lines.component'

const Lines = angular
	.module('lines', [])
	.component('linesComponent', LinesComponent)
	.service('LinesService', LinesService)
	.config(($stateProvider) => {
		'ng-inject'
			$stateProvider
				.state('lines', {
					url: '/views/lines',
					component: 'LinesComponent',
					resolve: { 
						dallLines: LinesService => {
							return LinesService.getLines()
						}
					},
					controller: 'LinesController'	
				})	
	})
	.name

export default Lines

