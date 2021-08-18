import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  getSensorsByRoomId(id:number): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<any>('http://bssdehamdock.westeurope.cloudapp.azure.com:8080/room/getbyId/' + id, {headers: httpHeaders});
  }

  fetchRoomListFromAPI(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<any>('http://bssdehamdock.westeurope.cloudapp.azure.com:8080/room/getall', {headers: httpHeaders});
  }

  getRoomByRoomName(name:string): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<any>('http://bssdehamdock.westeurope.cloudapp.azure.com:8080/room/getbyname/' + name, {headers: httpHeaders});
  }
}
