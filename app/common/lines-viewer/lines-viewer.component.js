/* lines-viewer/lines-viewer.component.js */
'use strict'
import LinesViewerController from './lines-viewer.controller'

const LinesViewerComponent = {
	bindings: {
		lineData: '<'
	},
	controller: LinesViewerController,
	templateUrl: 'views/lines-viewer/lines-viewer.html'	
}

export default LinesViewerComponent
