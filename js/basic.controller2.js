

export class PersonControllerTwo {
  constructor(TestService) {
    this.firstName = 'Joe';
    this.lastName = 'H';
    console.log(this);
    TestService.print();
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}