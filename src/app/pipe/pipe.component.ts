import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {


  msg:string="good morning";

  employeeObj:any = {
    employeeId:101,
    employeeName:"Smith",
    designation:"Software Developer",
    skills:["Angular","HTML","CSS"],
    salary:50000,
    income : 49700.5056,
    othIncome:271280.12345
   }

   todaysDate = new Date();
}
