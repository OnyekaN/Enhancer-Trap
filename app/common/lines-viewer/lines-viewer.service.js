/* lines-viewer/lines-viewer.service.js */
'use strict'

class LinesViewerService {
	constructor($http) {
		this.$http = $http
		this.line = undefined
	}
	getLine(id) {
		return this.$http.get('/api/' + id)
						.then(response => response.data)
						.catch(e => console.log(e))	
	}
}

LinesViewerService.$inject = ['$http']

export default LinesViewerService
