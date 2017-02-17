import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductdataService } from '../shared/productdata.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  value:string="Watch";
allProduct:Product[]=[];
  constructor(private _data:ProductdataService) { }

  ngOnInit() {

    this._data.getAllProduct().subscribe(
      (data:Product[])=>{
        this.allProduct=data;
      }
    );
  }
onClicked(value:string){
if(value!=''){
this.allProduct=this.allProduct.filter(res=>res.pname.startsWith(value));
}
else{
  this._data.getAllProduct().subscribe(
      (data:Product[])=>{
        this.allProduct=data;
      }
    );
}
}
}
