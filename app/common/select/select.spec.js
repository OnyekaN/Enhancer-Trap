/* select/select.spec.js */

describe('selectComponent', () => {
	
	beforeEach(module('eTRapp'))
	
	module(($provide) => {
		$provide.service('LinesService', ['$q', ($q) => {
			this.getLines = $q.when()
		}])
	})

	beforeEach(inject(($rootScope, $controller, LinesService) => {
		scope = $rootScope.$new()
		mockLinesService = LinesService
		spyOn(mockLinesService, 'getLines').andCallThrough()
		linesController = $controller('LinesController', {
			$scope: scope,
			LinesService: mockLinesService
		})			
	}))
	
	it('should have access to a service called LinesService', () => {
		expect(scope.LinesService).toBeDefined()
	})



})

