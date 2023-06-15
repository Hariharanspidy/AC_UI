import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private AuthURL:string="https://localhost:7052/api/Auth/";
  private addserviceCenterURL:string="https://localhost:7049/admin/addServiceCenter";
  private AddBookingURL:string="https://localhost:7049/api/Appointment/appointment_booking";
  private adminloginurl:string="https://localhost:7049/admin/login"
  private adminsignupurl:string="https://localhost:7049/admin/signup"
  private userloginurl:string="https://localhost:7049/user/login"
  private usersignupurl:string="https://localhost:7049/user/signup"
                               
  constructor(private http:HttpClient) { }
  adminsignup(adminobj:any){
    return this.http.post<any>(`${this.adminsignupurl}`,adminobj)
  }

   usersignup(userobj:any){
     return this.http.post<any>(`${this.usersignupurl}`,userobj)
   }

   adminlogin(adminobj:any ){
    return this.http.post<any>(`${this.adminloginurl}`,adminobj)
}
  userlogin(loginobj:any ){
       return this.http.post<any>(`${this.userloginurl}`,loginobj)
  }
  addCenterDB(centerobj:any){
    return this.http.post<any>(`${this.addserviceCenterURL}`,centerobj)
  }
  // editCenterDB(centerobj:any){
  //   return this.http.post<any>(`${this.AddCenterURL}`,centerobj)
  // }
  onBookDB(centerobj:any){
    console.log(centerobj)
    return this.http.post<any>(`${this.AddBookingURL}`,centerobj)
  }

}
