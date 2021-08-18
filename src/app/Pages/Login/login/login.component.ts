import {Component, OnInit} from '@angular/core';
import {RegistrationService} from '../../../_services/registration.service';
import {User} from '../../../_interface/User';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    user = new User();
    msg = '';
    login: boolean = true;

    constructor(private service: RegistrationService, private route: Router) {
    }


    ngOnInit(): void {
        $('.message a').click(function(){
            $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
        });
    }

    loginUser(): void {
        this.service.loginUserFromRemote(this.user).subscribe(
            data => {
                console.log('response recieved'),
                    localStorage.setItem('token', data.jwtToken),
                    localStorage.setItem('username', this.user.username),
                    this.route.navigate(['/dashboard/overview']);
            },
            error => {
                console.log('exception occured'),
                    localStorage.setItem('auth', '');
                this.msg = 'Bad credentials, please enter valid credentials';
            }
        );
    }
}
