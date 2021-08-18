import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private http: HttpClient) {
  }
  getSensorListFromRemote(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<any>('http://bssdehamdock.westeurope.cloudapp.azure.com:8080/sensor/getall', {headers: httpHeaders});
  }
  getSensorByIdFromRemote(id: number): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<any>('http://bssdehamdock.westeurope.cloudapp.azure.com:8080/sensor/getbyid/' + id, {headers: httpHeaders});
  }
  getLastSensorDataByIdFromRemote(id: number): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<any>('http://bssdehamdock.westeurope.cloudapp.azure.com:8080/sensordata/getlastfromsensor/' + id, {headers: httpHeaders});
  }
  getCurrentdataFromRemote(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<any>('http://bssdehamdock.westeurope.cloudapp.azure.com:8080/data/current', {headers: httpHeaders});
  }
  getSensorDataBySensorId(id: number): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<any>('http://bssdehamdock.westeurope.cloudapp.azure.com:8080/sensordata/getbysensorid/' + id, {headers: httpHeaders});
  }

  getSensorDataBetweenDates(id: number, date_ob: Date, date_ob2: Date): Observable<any>{
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = ("0" + date_ob.getHours()).slice(-2);
    let minutes = ("0" + date_ob.getMinutes()).slice(-2);
    let seconds = ("0" + date_ob.getSeconds()).slice(-2);

    let date2 = ("0" + date_ob2.getDate()).slice(-2);
    let month2 = ("0" + (date_ob2.getMonth() + 1)).slice(-2);
    let year2 = date_ob2.getFullYear();
    let hours2 = ("0" + date_ob2.getHours()).slice(-2);
    let minutes2 = ("0" + date_ob2.getMinutes()).slice(-2);
    let seconds2 = ("0" + date_ob2.getSeconds()).slice(-2);

    let to = year + "-" + month + "-" + date + "T" + hours + ":" + minutes + ":" + seconds + "Z";
    let from = year2 + "-" + month2 + "-" + date2 + "T" + hours2 + ":" + minutes2 + ":" + seconds2 + "Z";

    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    const body = JSON.stringify({ from: from, to: to });
    return this.http.post('http://bssdehamdock.westeurope.cloudapp.azure.com:8080/sensordata/getbetweendates/' + id, body, {headers: httpHeaders});
  }

}
