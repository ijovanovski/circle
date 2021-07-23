import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {DebugElement } from '@angular/core';
import {By} from '@angular/platform-browser';
import { ClickComponent } from './click/click.component';
import { AuthComponent } from './auth/auth.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';


describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ClickComponent,
        AuthComponent,
        ProductListComponent
        
      ],
      imports :[FormsModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'circle-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('circle-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    fixture.nativeElement
    expect(compiled.querySelector('span').textContent).toContain('circle-angular app is running!');
  });


});
