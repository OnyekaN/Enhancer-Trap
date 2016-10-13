'use strict'
import Nav from './nav/index'
import Lines from './lines/index'

const common = angular
	.module('app.common', [
	 	Nav,
		Lines
	])
	.name

export default common
