import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    isLoogedIn = false;

    constructor() {
    }


    public isLoggedin(isLoogedIn): boolean {
        if (true) {
            isLoogedIn = true;
        } else {
            isLoogedIn = false;
        }
        return isLoogedIn;
    }
}
