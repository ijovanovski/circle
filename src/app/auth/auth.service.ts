import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  authenticate() {
    localStorage.setItem('user','ivica');
   }

   
   checkAuth() {

    return (localStorage.getItem('user') =='ivica')
   }




}

