import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  searchText: string="";
  tempProductList:any[]=[]
  
  
  constructor(private productService:ProductListService ) { }

  ngOnInit(): void {

    this.productService.getProductList().subscribe(
      data => this.tempProductList= data
    )
  }
  
  
  FilterProductList (event:any) {
        let val=this.searchText;
        this.productService.filterProductList(val).then(data => {
          this.tempProductList=data
        }
          )
  }


}
