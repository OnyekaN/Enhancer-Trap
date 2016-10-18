'use strict'
import Lines from './lines/index'
import Nav from './nav/index'
import Select from './select/index'

const common = angular
	.module('app.common', [
		Lines,
	 	Nav,
		Select
	])
	.name

export default common
