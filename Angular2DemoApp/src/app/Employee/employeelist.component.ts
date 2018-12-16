import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'list-employee',
  templateUrl: 'app/employee/employeelist.component.html',
  styleUrls: ['app/employee/employeelist.component.css'],
  providers: [EmployeeService]
})

export class EmployeelistComponent implements OnInit {
  employees: IEmployee[];


  constructor(private _employeeService: EmployeeService) {
    //this.employees = [
    //  { code: '0129578', name: 'Santosh', gender: 'Male', dateOfBirth: '04/19/2010', annualSalary: 1002.23 },
    //  { code: '0129901', name: 'Arun', gender: 'Male', dateOfBirth: '01/26/2010', annualSalary: 1002 },
    //  { code: '0158133', name: 'Anisha', gender: 'Female', dateOfBirth: '04/19/2012', annualSalary: 1002.23565 },
    //];
  }
  ngOnInit() {
    //(this._employeeService.getEmployees().subscribe((employeeData) => this.employees == employeeData));
    this._employeeService.getEmployees().subscribe((data: IEmployee[]) => {
      this.employees = data;
      console.log(data);
    });
  }

  trackEmployeeCode(index: number, employee: any): string {
    return employee.code;
  }

  getTotalEmployeeCount(): Number {
    return this.employees.length;
  }
  getTotalMaleEmployeeCount(): Number {
    return this.employees.filter(e => e.gender === 'Male').length;
  }
  getTotalFemaleEmployeeCount(): Number {
    return this.employees.filter(e => e.gender === 'Female').length;
  }

  selectedEmployeeCountRadioButton: string = 'All';

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }

} 