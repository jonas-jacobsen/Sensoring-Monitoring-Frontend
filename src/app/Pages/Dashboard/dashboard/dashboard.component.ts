import {Component, OnInit} from '@angular/core';
import {OverviewComponent} from '../overview/overview.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    component: any;

    constructor() {
    }

    ngOnInit(): void {
        this.component = OverviewComponent;
    }

    showOverviewComponent(): void {
        this.component = OverviewComponent;
    }

}
