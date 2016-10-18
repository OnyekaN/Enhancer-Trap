/* lines/index.js */
'use strict'
import LinesService from './lines.service'
import LinesComponent from './lines.component'

const Lines = angular
	.module('lines', [])
	.component('linesComponent', LinesComponent)
	.service('LinesService', LinesService)
	.name

export default Lines
