/* nav/index.js */
'use strict'
import NavComponent from './nav.component.js'
import NavService from './nav.service.js'

const Nav = angular
	.module('nav', [])
	.component('navComponent', NavComponent)
	.service('NavService', NavService)
	.name

export default Nav
