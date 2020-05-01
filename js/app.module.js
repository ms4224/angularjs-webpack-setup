
import angular from 'angular';
import {PersonController} from './basic.controller'
import {PersonControllerTwo} from './basic.controller2';
import {testDirective} from './test/test.directive';
import { TestController } from './test/test.controller';
angular.module('myApp', [])
    .controller('PersonController', PersonController)
    .controller('PersonControllerTwo', PersonControllerTwo)
    .directive('testDirective', testDirective)
    .controller('TestController', TestController)