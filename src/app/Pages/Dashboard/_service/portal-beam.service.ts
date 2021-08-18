import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PortalBeamService {

  constructor(private http: HttpClient) {
  }

  //Portalbeam data
  getPortalBeamSensorDataBetweenDates(id: number, from: string, to: string, length: number): Observable<any>{
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    const body = JSON.stringify({ from: from, to: to });
    return this.http.post('http://bssdehamdock.westeurope.cloudapp.azure.com:8080/sensor/portalbeam/getdatesbetween/'+length, body, {headers: httpHeaders});
  }

  getLastPortalDataByIdFromRemote(id: string): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<any>('http://bssdehamdock.westeurope.cloudapp.azure.com:8080/sensor/portalbeam/getlastdates/'+id, {headers: httpHeaders});
  }
}
