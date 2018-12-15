import { Component } from '@angular/core';

@Component({
  selector: 'my-employee',
  templateUrl:'app/employee/employee.component.html'
})


export class EmployeeComponent {
  firstName: string = "Tom";
  lastName: string = "Kasam";
  gender: string = "Male";
  age: number = 20;
  showDetails: boolean = false;

  toggelDetails(): void {
    this.showDetails = !this.showDetails;
  }
}