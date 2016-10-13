/* lines/lines.spec.js */
'use strict'

describe('LinesService', () => {

	beforeEach(module('eTRapp'))

	let scope
		, linesService

	beforeEach(inject(($rootScope, LinesService) =>	{
		scope = $rootScope.$new() 
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
