/* thumbs/thumbs.controller.js */
'use strict'

class ThumbsController {
	constructor($scope, LinesService) {
		this.LinesService = LinesService;
		this.$scope = $scope;
	}	
	$onInit() {
		this.allLines = {};
		this.displayLines = {};
		this.LinesService.getLines().then(response => this.allLines = this.displayLines = response);
		this.$scope.$on('selectionChange', (event, selections) => {
			if ( !String(selections) ) { /* e.g. selections == "" */
				return this.displayLines = this.allLines;	
			}	
			else {
				return this.displayLines = this.allLines.filter(obj => {
					for ( let item in selections ) {	
						if ( obj['Line Number'] == selections[item] 
							|| obj['Annotations'].indexOf(selections[item]) != -1 ) { 
							return true;
						}
					}
				})
			}
		})
	}
}

ThumbsController.$inject = ['$scope', 'LinesService'];

export default ThumbsController;
