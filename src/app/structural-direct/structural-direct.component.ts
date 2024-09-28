import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-direct',
  templateUrl: './structural-direct.component.html',
  styleUrls: ['./structural-direct.component.css']
})
export class StructuralDirectComponent {


  courses:string[]=["Angular Development","Java Development","DEVOPS","AWS","Full Stack Development","Salesforce Development"];


  products:Product[] = [
    {productName:"Laptop",price:50000,quantity:2},
    {productName:"IPhone 15",price:100000,quantity:2},
    {productName:"LED TV",price:60000,quantity:1},
    {productName:"Shoes",price:10000,quantity:5}
  ];

}

interface Product {
  productName:string;
  price:number;
  quantity:number;
}
