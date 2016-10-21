/* thumbs/thumbs.controller.js */
'use strict'

class ThumbsController {
	constructor($scope, LinesService) {
		this.LinesService = LinesService	
		this.$scope = $scope
	}	
	$onInit() {
		this.allLines = {}
		this.displayLines = {}
		this.LinesService.getLines().then(response => this.allLines = this.displayLines = response)
		this.$scope.$on('selectionChange', (event, data) => {
			if (data == "") {
				return this.displayLines = this.allLines	
			}	
			else {
				return this.displayLines = this.allLines.filter(obj => {
					for ( let item in data ) {	
						if ( obj.Annotations.indexOf(data[item]) != -1 || obj['Line Number'] == data[item]) {
							return true
						}
					}
				})
			}
		})
	}
}

ThumbsController.$inject = ['$scope', 'LinesService']

export default ThumbsController
