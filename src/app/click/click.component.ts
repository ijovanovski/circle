import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {


  countClicks :any =0;


  constructor() { }

  ngOnInit(): void {
  }

  addClick(){
    this.countClicks  += 1;
  }
  
    removeClick(){
     this.countClicks -= 1;
    }
    

}
