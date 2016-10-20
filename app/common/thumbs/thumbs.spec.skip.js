/* thumbs/thumbs.spec.js */
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

/*describe('ThumbsController', () => {

	beforeEach(module('eTRapp'))

	let elm
		, scope
		, thumbsCtrl

	beforeEach(inject(($rootScope, $compile, ThumbsController) => {
	
	}))

	it('should be defined', () => {
		expect(thumbsCtrl).toBeDefined()
		// fails
	})

})
*/
