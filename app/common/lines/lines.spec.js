/* lines/lines.spec.js */
'use strict'

describe('LinesService', () => {

	beforeEach(module('eTRapp'))

	let linesService

	beforeEach(inject(($rootScope, LinesService) =>	{
		linesService = LinesService
	}))

	it('should be defined', () => {
		expect(linesService).toBeDefined()
	})

	it('should return a promise', () => {
		let a = linesService.getLines()
		expect(a).toBeDefined()
		console.log(a)
	})
})

/*describe('LinesController', () => {

	beforeEach(module('eTRapp'))

	let elm
		, scope
		, linesCtrl

	beforeEach(inject(($rootScope, $compile, LinesController) => {
	
	}))

	it('should be defined', () => {
		expect(linesCtrl).toBeDefined()
		// fails
	})

})
*/
