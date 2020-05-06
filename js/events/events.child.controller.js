
export class EventsChildController {
    constructor ($scope) {
        this.$scope = $scope;
        $scope.$on('yoyoyo', () => console.log('dude got an event from parent'))
        this.message = 'Hello, i am the child controller. please click here to emit';
    }

    emit() {
        console.log('emitting from child....')
        this.$scope.$emit('event from child');
        // $broadcast('Sending from parent');
    }
 }