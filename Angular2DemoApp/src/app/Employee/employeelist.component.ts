import { Component } from '@angular/core';

@Component({
  selector: 'list-employee',
  templateUrl: 'app/employee/employeelist.component.html',
  styleUrls: ['app/employee/employeelist.component.css']
})

export class EmployeelistComponent {
  employees: any[];
  constructor() {
    this.employees = [
      { code: '0129578', name: 'Santosh', age: 33,gender:'male', doj: '04/19/2010',salary:'1002.23' },
      { code: '0129901', name: 'Arun', age: 34, gender: 'male', doj: '01/26/2010', salary: '1002' },
      { code: '0158133', name: 'Anisha', age: 33, gender: 'female', doj: '04/19/2012', salary: '1002.23565' },
    ];
  }
  getEmployees() {
    this.employees = [
      { code: '0129578', name: 'Santosh', age: 33, gender: 'male', doj: '04/19/2010', salary: '1002.23' },
      { code: '0129901', name: 'Arun', age: 34, gender: 'male', doj: '01/26/2010', salary: '1002' },
      { code: '0158133', name: 'Anisha', age: 33, gender: 'female', doj: '04/19/2012', salary: '1002.23565' },
      { code: '0160499', name: 'Ganesh', age: 34, gender: 'male', doj: '04/19/2012', salary: '10000' },
    ];
  }

  trackEmployeeCode(index: number, employee: any): string {
    return employee.code;
  }
} 