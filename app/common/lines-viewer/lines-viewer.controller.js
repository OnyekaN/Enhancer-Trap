/* lines-viewer/lines-viewer.controller.js */
'use strict'

class LinesViewerController {
	constructor(LinesViewerService) {
		this.LinesViewerService = LinesViewerService;
		this.line = this.lineData[0];  // lineData resolved on load in ./index.js, bound in ./*component.js
		if ( !this.line.Annotations.length ) {
			this.line.Annotations = ["In Progress"];
		}
	}
	$onInit() {
		this.zbrainref = `https://engertlab.fas.harvard.edu/Z-Brain/#/home/line/MH${this.line["Line Number"]}-Gal4`;
	}
}

LinesViewerController.$inject = ['LinesViewerService'];

export default LinesViewerController;
