/* lines/index.js */
'use strict'
import LinesService from './lines.service'

const Lines = angular
	.module('lines', [])
	.service('LinesService', LinesService)
	.name

export default Lines
