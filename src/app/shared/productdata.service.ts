import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class ProductdataService {
url:string="http://localhost:3000/products/";
  constructor(private _http:Http) { }

  getAllProduct(){
    return this._http.get(this.url)
    .map((res:Response)=>res.json());
  }

}
