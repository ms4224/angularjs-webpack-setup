
export class TestService {
    message: string;
    constructor() {
        this.message = 'I am the test Service';
    }
    print() {
        console.log(this.message);
    }
}