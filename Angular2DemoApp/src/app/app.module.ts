import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee.component';
import { EmployeelistComponent } from './Employee/employeelist.component';
import { EmployeeTitlePipe } from './Employee/employeeTitle.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, EmployeeComponent, EmployeelistComponent, EmployeeTitlePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
