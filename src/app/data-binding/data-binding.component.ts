import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  userName: string = "Sam";
  userEmailId: string = "sam@gmail.com";

  employeeObj: any = {
    employeeId: 101,
    employeeName: "Smith",
    designation: "Software Developer",
    skills: ["Angular", "HTML", "CSS"]
  }

  imgPath: string = "https://www.liblogo.com/img-logo/an271a55f-angular-logo-angular-logo-transparent-png-stickpng.png";

  isDisabled: boolean = false;
  isBtnDisabled: boolean = false;
  counter:number=0;
  firstName:string="";

   price:number = 0 ;
   quantity:number = 0 ;
   totalPrice:number = 0;

  btnClick() {
    console.log("Button Clicked");
  }

  increment() {
    if(this.counter < 5){
      this.counter++;
    }
  }

  decrement() {
    if(this.counter > 0){
      this.counter--;
    }
  }


  // modifyFName(){
  //   console.log("FName Changed");
  // }

  modifyFName(event:any){
    console.log("entered Value " , event);
    this.firstName = event.target.value;
  }

  collectPrice(e:any){
     if(e.target != null){
        this.price = e.target.value;
     }
  }

  collectQuantity(e:any){
    if(e.target != null){
      this.quantity = e.target.value;
    }
  }


  calculateTotalPrice(){
    this.totalPrice = this.price * this.quantity
  }
}
