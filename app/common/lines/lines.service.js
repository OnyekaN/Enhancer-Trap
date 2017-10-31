/* lines/lines.service.js */
'use strict'

class LinesService {
	constructor($http) {
		this.$http = $http;
	}
	getLines() {
		return this.$http.get('api/lines')
						.then(response => response.data) 
						.catch(e => console.log(e));
	}
}

LinesService.$inject = ['$http'];

export default LinesService;
