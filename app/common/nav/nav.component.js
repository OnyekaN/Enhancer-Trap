/* nav/nav.component.js */
'use strict'
import NavController from './nav.controller'

const NavComponent = {
	controller: NavController,
	template: `
		<nav class="navbar navbar-default" 
		aria-label="Page navigation">
			<div class="navbar-inner container-fluid">
				<div class="navbar-header pull-left">
					<h4>Enhancer Trap Line Browser</h4>
				</div>
				<div class="collapse navbar-collapse">
					<ul class="nav navbar-nav">
						<li ng-repeat="page in $ctrl.pages">
							<a href="{{page.link}}">
								{{page.name}}
							</a>
						</li>	
					</ul>
				</div>
			</div>
		</nav>
	`
}

export default NavComponent;

