/* select/select.controller.js. */
'use strict'

class SelectController {
	constructor(LinesService, $scope) {
		this.LinesService = LinesService	
		this.$scope = $scope
	}

	$onInit() {
		this.lineNumbers = []
		this.lineAnnotations = []
		this.LinesService.getLines()
			.then(response => { this.lineNumbers = response.map(obj => obj["Line Number"])
												response.map(obj => obj.Annotations.map(
																				ann => { if(!~this.lineAnnotations.indexOf(ann)) {
																									this.lineAnnotations.push(ann)
																									}
																							}))
												this.lineAnnotations.sort()})

		this.$scope.$watch('selectedAnnotations', this.selectionChanged())
		this.$scope.$watch('selectedLineNumbers', this.selectionChanged())
	}
	
	selectionChanged(newVal, oldVal) {
		return (newVal, oldVal) => {
			this.$scope.$parent.$broadcast('selectionChange', newVal)
		}	
	}

}

SelectController.$inject = ['LinesService', '$scope']

export default SelectController

