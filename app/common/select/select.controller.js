/* select/select.controller.js. */
'use strict'

class SelectController {
	constructor(LinesService) {
		this.LinesService = LinesService	
	}
	$onInit() {
		this.lineNumbers = []
		this.lineAnnotations = []
		this.LinesService.getLines()
			.then(response => { this.lineNumbers = response.map(obj => obj["Line Number"])
												response.map(obj => obj.Annotations.map(
																				ann => { if(this.lineAnnotations.indexOf(ann) == -1) {
																									this.lineAnnotations.push(ann)
																									}
																							}))
												this.lineAnnotations.sort()})
	}
}

SelectController.$inject = ['LinesService']

export default SelectController

