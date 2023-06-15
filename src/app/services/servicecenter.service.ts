import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serviceCenter } from '../helpers/serviceCenter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicecenterService {

  constructor(private http:HttpClient ) { }
  editserviceCenterURL="https://localhost:7049/admin/editServiceCenter";
  deleteserviceCenterURL="https://localhost:7049/admin/deleteServiceCenter";
  getserviceCenterURL="https://localhost:7049/admin/getservicecenter"
                        
  getService():Observable<serviceCenter[]>{
    return this.http.get<serviceCenter[]>(this.getserviceCenterURL)

    } 
  updateservice(ser:serviceCenter):Observable<serviceCenter>{
    return this.http.put<serviceCenter>(this.editserviceCenterURL+'/'+ser.serviceCenterID,ser)
  }
  deleteservice(id:string):Observable<serviceCenter>{
    return this.http.delete<serviceCenter>(this.deleteserviceCenterURL+'/'+id)
  }
  }

