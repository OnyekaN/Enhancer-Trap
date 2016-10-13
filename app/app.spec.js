'use strict'

describe('App', () => {
	let navService
		, router

	beforeEach(module('eTRapp'))	

	beforeEach(inject((NavService) => {
		navService = NavService
	}))

	it('should have a NavService service', () => {
		expect(navService).toBeDefined()
	})
})
