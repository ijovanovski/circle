import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClickComponent } from './click.component';
import {DebugElement } from '@angular/core';
import {By} from '@angular/platform-browser';



describe('ClickComponent', () => {
  let component: ClickComponent;
  let fixture: ComponentFixture<ClickComponent>;
  let de:DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de= fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('It should have clicked', () => {
    const h1=de.query(By.css('#title'));
    const btn=de.query(By.css('#btnRemoveClick'));
    btn.triggerEventHandler('click',{});
    fixture.detectChanges();
    expect(component.countClicks).toEqual(parseInt(h1.nativeElement.innerText));

  })
});

