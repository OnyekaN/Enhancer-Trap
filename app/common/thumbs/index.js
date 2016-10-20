/* thumbs/index.js */
'use strict'
//import Service from './lines.service'
import ThumbsComponent from './thumbs.component'

const Thumbs = angular
	.module('thumbs', [])
	.component('thumbsComponent', ThumbsComponent)
	//.service('LinesService', LinesService)
	.name

export default Thumbs 
