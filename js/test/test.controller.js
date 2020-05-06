import {printMe} from './test.class';
export class TestController {
    constructor() {
        this.message = 'yolo';
        this.igor = { name: 'Igor', address: '123 Somewhere' }
        printMe();
    }
}