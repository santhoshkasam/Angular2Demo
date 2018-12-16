"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var EmployeelistComponent = /** @class */ (function () {
    function EmployeelistComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.statusMessage = 'Loading data, please wait';
        this.selectedEmployeeCountRadioButton = 'All';
        //this.employees = [
        //  { code: '0129578', name: 'Santosh', gender: 'Male', dateOfBirth: '04/19/2010', annualSalary: 1002.23 },
        //  { code: '0129901', name: 'Arun', gender: 'Male', dateOfBirth: '01/26/2010', annualSalary: 1002 },
        //  { code: '0158133', name: 'Anisha', gender: 'Female', dateOfBirth: '04/19/2012', annualSalary: 1002.23565 },
        //];
    }
    EmployeelistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees().subscribe(function (data) {
            _this.employees = data;
            console.log(data);
        }, function (error) {
            _this.statusMessage = 'Problem with the service. Please try again after sometime.';
            console.error(error);
        });
    };
    EmployeelistComponent.prototype.trackEmployeeCode = function (index, employee) {
        return employee.code;
    };
    EmployeelistComponent.prototype.getTotalEmployeeCount = function () {
        return this.employees.length;
    };
    EmployeelistComponent.prototype.getTotalMaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Male'; }).length;
    };
    EmployeelistComponent.prototype.getTotalFemaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Female'; }).length;
    };
    EmployeelistComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    EmployeelistComponent = __decorate([
        core_1.Component({
            selector: 'list-employee',
            templateUrl: 'app/employee/employeelist.component.html',
            styleUrls: ['app/employee/employeelist.component.css'],
            providers: [employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeelistComponent);
    return EmployeelistComponent;
}());
exports.EmployeelistComponent = EmployeelistComponent;
//# sourceMappingURL=employeelist.component.js.map