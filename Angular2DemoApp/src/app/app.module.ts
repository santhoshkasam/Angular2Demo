import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee.component';
import { EmployeelistComponent } from './Employee/employeelist.component';
import { EmployeeTitlePipe } from './Employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './Employee/employeecount.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, EmployeeComponent, EmployeelistComponent, EmployeeTitlePipe, EmployeeCountComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
