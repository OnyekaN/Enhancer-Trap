/* lines-viewer/lines-viewer.controller.js */
'use strict'

class LinesViewerController {
	constructor(LinesViewerService) {		
		this.LinesViewerService = LinesViewerService
		this.line = this.lineData[0]
		if ( !this.line.Annotations.length ) {
			this.line.Annotations = ["In Progress"]
		}
	}	
	$onInit() {
	}
}

LinesViewerController.$inject = ['LinesViewerService']

export default LinesViewerController
