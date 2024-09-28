import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-db',
  templateUrl: './two-way-db.component.html',
  styleUrls: ['./two-way-db.component.css']
})
export class TwoWayDbComponent {

  firstName:string="John";
  mobileNo:string="";


  changeName(){
    this.firstName = "Sam"
  }

  fNameChange(e:any){
    if(e.target != null){
      this.firstName = e.target.value;
    }
  }

  save(){
    console.log("Name : " + this.firstName);
    console.log("Mobile No :  " + this.mobileNo);
  }


  productObj:Product = new Product();


  calculateTotalPrice() {
    if (this.productObj.price != undefined && this.productObj.quantity != undefined) {
      this.productObj.totalPrice = this.productObj.price * this.productObj.quantity
    }
  }

  saveProduct(){
    console.log("Product " , this.productObj);
  }

 
}


class Product {
  price:number | undefined;
  quantity:number | undefined;
  totalPrice:number | undefined;
}