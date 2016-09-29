'use strict'

describe('nav-component', () => {
	
	beforeEach(module('eTRapp'))
	let elm
		,	scope
	beforeEach(inject(($rootScope, $compile) => {
		elm = angular.element(`
			<div>
				<nav-component></nav-component>
			</div>
			`
		)
		scope = $rootScope.$new()
		$compile(elm)(scope);
		
		scope.$digest()
	}))

	it('should have a list of links', () => {
		let list = elm.find('ul');
		expect(list).toBeDefined();
	})

	it('should have at least one list elements', () => {
		let listElements = elm.find('li');
		expect(listElements.length).toBeGreaterThan(0);
	})



	
})
