/* select/index.js */
'use strict'
import SelectComponent from './select.component'
import LinesService from './lines.service'

const Select = angular
	.module('select', [])
	.component('selectComponent', SelectComponent)
	.service('LinesService', LinesService)
	.name

export default Select
