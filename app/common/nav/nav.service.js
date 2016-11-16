/* nav/nav.service.js */
'use strict'

class NavService {
	constructor() {
		this.pages = [
			{ name: 'Home', link: '/#/home' },
			/*{ name: 'Line Viewer', link: '/#/lines-viewer' },*/
			{ name: 'Engert Lab Website', link: 'http://labs.mcb.harvard.edu/Engert/#' },
			{ name: 'Z-Brain Atlas', link: 'http://engertlab.fas.harvard.edu/Z-Brain/' }
		]
	}
	getActive() {
	/* Return name of current active page based on current route */
	}
}
//NavService.$inject = ['$http', '$location']

export default NavService
