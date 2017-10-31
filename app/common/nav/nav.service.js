/* nav/nav.service.js */
'use strict'

class NavService {
	constructor() {
		this.pages = [
			{ name: 'Home', link: '#/home' },
			{ name: 'About', link: '#/about' },
			{ name: 'Engert Lab Website', link: 'http://labs.mcb.harvard.edu/Engert/#' },
			{ name: 'Z-Brain Atlas', link: 'http://engertlab.fas.harvard.edu/Z-Brain/' }
		]
	}
	getActive() {
	/* Return name of current active page */
	}
}
//NavService.$inject = ['$http', '$location']

export default NavService
