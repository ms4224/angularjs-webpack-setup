
export class EventsParentController {
    constructor ($scope) {
        this.$scope = $scope;
        // $scope.$on
        this.message = 'Hello, i am the parent controller. please click here to broadcast';
        this.$scope.$on('event from child', () => {
            console.log('whoa ho ho got an event from child')
        })
    }

    broadCast() {
        console.log('broadCasting...')
        console.log(this.$scope);
        this.$scope.$broadcast('yoyoyo');
        // $broadcast('Sending from parent');
    }
 }