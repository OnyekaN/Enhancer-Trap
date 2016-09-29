'use strict'

describe('App', () => {
	var navService
	var router

	beforeEach(angular.mock.module('eTRapp'))	

	beforeEach(inject((NavService) => {
		navService = NavService
	}))

	it('Should have a NavService service via Common', () => {
		expect(navService).toBeDefined()
	})
})
