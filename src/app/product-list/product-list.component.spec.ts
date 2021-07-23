import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ProductListComponent } from './product-list.component';
import { ProductListService } from './product-list.service';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productListService:ProductListService;
  let debugElement:DebugElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      imports:[FormsModule],
      providers: [ProductListService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    productListService= TestBed.inject(ProductListService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement =  fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test service in component', fakeAsync(() => {
    component.searchText ='shirt'
    let productSpy= spyOn(productListService, 'filterProductList').and.callThrough();
    component.FilterProductList({});

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      //get value from <li> list
      
      const value= debugElement.query(By.css('#product_0')).nativeElement.innerText;
       expect(value).not.toContain(component.searchText);

    }
   
      
    )


  }));
  


});
