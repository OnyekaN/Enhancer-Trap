/* lines-viewer/lines-viewer.controller.js */
'use strict'

class LinesViewerController {
	constructor(LinesViewerService) {	
		this.line = this.lineData[0]
		this.LinesViewerService = LinesViewerService
	}	
	$onInit() {
		console.log(this.line)
	}
}

LinesViewerController.$inject = ['LinesViewerService']

export default LinesViewerController
