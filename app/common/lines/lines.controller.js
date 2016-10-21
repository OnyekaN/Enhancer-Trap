/* lines/lines.controller.js */
'use strict'

class LinesController {

	constructor(LinesService) {
		this.allLines = {}
		this.displayLines = {}
		this.LinesService = LinesService	
	}
	
	$onInit() {
		this.LinesService.getLines().then(response => this.allLines = response)
	}
}

LinesController.$inject = ['LinesService']

export default LinesController

