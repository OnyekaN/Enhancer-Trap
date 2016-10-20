/* lines/lines.controller.js */
'use strict'

class LinesController {
	constructor(LinesService) {
		this.LinesService = LinesService	
	}	
	$onInit() {
		this.allLines = {}
		this.random = 'random'
		this.displayLines = {}
		this.LinesService.getLines().then(response => this.allLines = response)
	}
}

LinesController.$inject = ['LinesService']

export default LinesController
