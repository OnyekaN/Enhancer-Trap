/* lines/lines.controller.js */
'use strict'

class LinesController {
	constructor(LinesService) {
		this.LinesService = LinesService	
	}	
	$onInit() {
		this.lines = {}
		this.LinesService.getLines().then(response => this.lines = response)
	}
}

LinesController.$inject = ['LinesService']

export default LinesController
