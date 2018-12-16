import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee.component';
import { EmployeelistComponent } from './Employee/employeelist.component';
import { EmployeeTitlePipe } from './Employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './Employee/employeecount.component';
import { HomeComponent } from './Home/home.component';
import { PageNotFoundComponent } from './Other/pageNotFound.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeelistComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes, { useHash: true })],
  declarations: [AppComponent, EmployeeComponent, EmployeelistComponent,
    EmployeeTitlePipe, EmployeeCountComponent, HomeComponent, PageNotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
