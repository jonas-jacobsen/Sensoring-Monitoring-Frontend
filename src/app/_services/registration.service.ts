import {Injectable} from '@angular/core';
import {User} from '../_interface/User';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

    constructor(private http: HttpClient) {
    }

    public loginUserFromRemote(user: User): Observable<any> {
        return this.http.post<any>('http://bssdehamdock.westeurope.cloudapp.azure.com:8080/authenticate', user);
    }

    public registerUserFromRemote(user: User): Observable<any> {
        return this.http.post<any>('http://bssdehamdock.westeurope.cloudapp.azure.com:8080/login/registeruser', user);
    }
}
