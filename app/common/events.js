'use strict'
const EventEmitter = require('events')
class MyEmitter extends EventEmitter {}

const selEmitter = new MyEmitter()

selEmitter.on('selectionChange', (selection) => {
	console.log(selection)

})

