/* select/index.js */
'use strict'
import SelectComponent from './select.component';

const Select = angular
	.module('select', [])
	.component('selectComponent', SelectComponent)
	.name;

export default Select;
