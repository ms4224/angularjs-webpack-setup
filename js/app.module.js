
import angular from 'angular';
import {PersonController} from './basic.controller'
import {PersonControllerTwo} from './basic.controller2';
import {testDirective} from './test/test.directive';
import { TestController } from './test/test.controller';
import { TestService } from './test/test.service';
angular.module('myApp', [])
    .controller('PersonController', PersonController)
    .controller('PersonControllerTwo', ['TestService', PersonControllerTwo])
    .directive('testDirective', testDirective)
    .controller('TestController', TestController)
    .service('TestService', TestService)