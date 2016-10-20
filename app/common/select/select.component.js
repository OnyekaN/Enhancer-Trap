/* select/select.component.js */
'use strict'
import SelectController from './select.controller'

const selectComponent = {
	bindings: {
		lines: '<'
	},
	controller: SelectController,
	templateUrl: 'views/select/select.html'
}

export default selectComponent
