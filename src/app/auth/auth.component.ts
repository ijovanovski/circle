import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  salSlip:any
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }


  getSalarySlep() {
    
    if(this.auth.checkAuth()){
      this.salSlip='Salary Slip'
  } else {
    this.salSlip= 'not authenticated'
  }

}
}
