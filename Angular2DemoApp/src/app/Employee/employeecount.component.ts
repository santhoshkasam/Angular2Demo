import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'employee-count',
  templateUrl: 'app/employee/employeeCount.component.html',
  styleUrls: ['app/employee/employeeCount.component.css']
})
export class EmployeeCountComponent {
  @Input()
  all: number;
  @Input()
  male: number;
  @Input()
  female: number;

  selectedradiobuttonvalue: string = 'All';

  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChanged() {
    this.countRadioButtonSelectionChanged.emit(this.selectedradiobuttonvalue);
    console.log(this.selectedradiobuttonvalue);
  }
}