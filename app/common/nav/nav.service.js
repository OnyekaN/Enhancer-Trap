/* nav/nav.service.js */
'use strict'

class NavService {
	constructor() {
		this.pages = [
			{ name: 'Home', link: '/#/home' },
			{ name: 'Line Viewer', link: '/#/lines-viewer' },
			{ name: 'Engert Lab Website', link: '#' },
			{ name: 'Z-Brain', link: '#' }
		]
	}
	getActive() {
	/* Return name of current active page based on current route */
	}
}
//NavService.$inject = ['$http', '$location']

export default NavService
