// Class: abstraction, extend, polymorphism
class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
  go(goTo) {
    console.log(goTo);
  }
}

class Employee extends Person {
  constructor(name, age, city, position, salary) {
    super(name, age, city);
    this.position = position;
    this.salary = salary;
  }
}
const employee = new Employee('Linh Nguyen', 20, 'HCM', 'marketing', '5000000');
console.log(employee);
employee.go('I go to work by bycicle');

class Customer extends Person {
  constructor(name, age, city, customerType, numberPhone) {
    super(name, age, city);
    this.customerType = customerType;
    this.numberPhone = numberPhone;
  }
}
const customer = new Customer('Mai Nguyen', 25, 'Da Nang', 'Diamond', '0935310330');
console.log(customer);
customer.go('I go to play by car');
