/* lines/lines.controller.js */
'use strict'

class LinesController {
	constructor(LinesService) {
		this.lines = LinesService.getLines()
	}		
}

LinesController.$inject = ['LinesService']

export default LinesController
