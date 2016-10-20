/* thumbs/thumbs.controller.js */
'use strict'

class ThumbsController {
	constructor(LinesService) {
		this.LinesService = LinesService	
	}	
	$onInit() {
		this.lines = {}
		this.LinesService.getLines().then(response => this.lines = response)
	}
}

ThumbsController.$inject = ['LinesService']

export default ThumbsController
