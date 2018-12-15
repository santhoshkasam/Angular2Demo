import { Component } from "@angular/core";

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
  //template: `<div>
  //         <h1>{{pageHeader}}</h1>
  //          </div>`
})
export class AppComponent {
  pageHeader: string = "Employee Details";
  firstName: string = "santosh";
  lastName: string = "kasam";
  isDisabled: boolean = false;
  classesToApply: string = 'boldClass italicClass';
  isBoldClass: boolean = true;
  isItalicClass: boolean = true;
  name: string = 'santosh';
  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }

  addClasses() {
    let classes = {
      boldClass: this.isBoldClass,
      italicClass: this.isItalicClass
    }
    return classes;
  }

  onClick(): void {
    console.log('Button Clicked');
  }
}