export interface IEmployee {
  code: string;
  name: string;
  gender: string;
  annualSalary: number;
  dateOfBirth: string;


 // computeMonthlySalary(salary: number): number;
}

//export class Employee implements IEmployee {

//  computeMonthlySalary(salary: number): number {
//    return salary / 12;
//  }
//  constructor(public code: string,
//    public name: string,
//    public age: number,
//    public gender: string,
//    public doj: string,
//    public salary: number) { }


//}