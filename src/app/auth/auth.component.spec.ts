import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let h1:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 =  fixture.nativeElement.querySelector('#star');
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('click call function', () => {
  component.getSalarySlep()
  fixture.detectChanges();
  expect(h1.textContent).toContain(component.salSlip)
})

});
