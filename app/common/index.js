'use strict'
import Lines from './lines/index'
import Nav from './nav/index'
import Select from './select/index'
import Thumbs from './thumbs/index'

const common = angular
	.module('app.common', [
		Lines,
	 	Nav,
		Select,
		Thumbs
	])
	.name

export default common
