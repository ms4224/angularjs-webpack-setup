
export function eventsDirective() {
    return {
        restrict: 'E',
        scope: {
          customerInfo: '='
        },
        template: require('./events.directive.html'),
    }
}