/* lines-viewer/index.js */
'use strict'
import uiRouter from 'angular-ui-router';
import LinesViewerComponent from './lines-viewer.component';
import LinesViewerService from './lines-viewer.service';

const LinesViewer = angular
	.module('LinesViewer', [ 
		uiRouter
	])
	.component('linesViewerComponent', LinesViewerComponent)
	.service('LinesViewerService', LinesViewerService)
	.config([
    '$stateProvider',
    '$urlRouterProvider',
    ($stateProvider, $urlRouterProvider) => {
      $stateProvider
        .state('lines-viewer', {
          url: '/lines-viewer/{id}',
          template: `<lines-viewer-component line-data="$resolve.line"></lines-viewer-component>`,
					resolve: {
						line: [
							'$stateParams', 
							'LinesViewerService', 
							($stateParams, LinesViewerService) => {
								return LinesViewerService.getLine($stateParams.id)
							}
						]
					},
        })
			$urlRouterProvider.otherwise('/')
    }])	
	.name;

export default LinesViewer;
