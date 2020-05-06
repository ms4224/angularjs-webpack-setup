
import angular from 'angular';
import {PersonController} from './basic.controller'
import {PersonControllerTwo} from './basic.controller2';
import {testDirective} from './test/test.directive';
import { TestController } from './test/test.controller';
import { TestService } from './test/test.service';
import { EventsParentController } from './events/events.parent.controller';
import { eventsDirective } from './events/events.directive';
import { EventsChildController } from './events/events.child.controller';
angular.module('myApp', [])
    .controller('PersonController', PersonController)
    .controller('PersonControllerTwo', ['TestService', PersonControllerTwo])
    .directive('testDirective', testDirective)
    .controller('TestController', TestController)
    .service('TestService', TestService)
    .directive('eventsDirective', eventsDirective)
    .controller('EventsParentController', ['$scope', EventsParentController])
    .controller('EventsChildController', ['$scope', EventsChildController])
