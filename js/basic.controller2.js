

export class PersonControllerTwo {
  constructor() {
    this.firstName = 'Joe';
    this.lastName = 'H';
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}