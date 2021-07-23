import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  productList = PRODUCT_LIST;



  constructor() { }


  getProductList(){
    return of(this.productList)
  }

  public filterProductList(searchString:string):Promise<any> {
    
    return of( 
       
      this.productList.filter( 
       
        (product:any) => product.title.toLowerCase().indexOf(searchString) > -1 )

      ).toPromise();

  
}

}

export const PRODUCT_LIST= [
  {
  title: "Shirt",
  description: "Raw Organic Cotton",
  type : "dairy",
  price: 250,
  rating: 4
},
{
  title: "Shirt",
  description: "Raw Organic Cotton",
  type : "dairy",
  price: 250,
  rating: 4
},
{
  title: "Jacket",
  description: "Raw Organic Cotton",
  type : "dairy",
  price: 250,
  rating: 4
},

{
  title: "Blazer",
  description: "Raw Organic Cotton",
  type : "dairy",
  price: 250,
  rating: 4
}

]

