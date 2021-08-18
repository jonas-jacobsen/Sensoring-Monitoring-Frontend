import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {IndexSiteComponent} from './Pages/Index/index-site/index-site.component';
import {PageNotFoundComponent} from './Pages/Dashboard/page-not-found/page-not-found.component';
import {FooterComponent} from './Pages/Dashboard/footer/footer.component';
import {NavbarComponent} from './Pages/Dashboard/navbar/navbar.component';
import {LoginComponent} from './Pages/Login/login/login.component';
import {AuthGuardService} from './Pages/Dashboard/_service/auth-guard.service';
import {SidebarComponent} from './Pages/Dashboard/sidebar/sidebar.component';
import {DashboardComponent} from './Pages/Dashboard/dashboard/dashboard.component';
import {OverviewComponent} from './Pages/Dashboard/overview/overview.component';
import {FloorplanComponent} from './Pages/Dashboard/floorOverview/floorplan/floorplan.component';
import {FlooroneComponent} from './Pages/Dashboard/floorOverview/floorone/floorone.component';
import {FloortwoComponent} from './Pages/Dashboard/floorOverview/floortwo/floortwo.component';
import {FloorthreeComponent} from './Pages/Dashboard/floorOverview/floorthree/floorthree.component';
import {TemperatureComponent} from './Pages/Dashboard/temperature/temperature.component';
import {SensorsComponent} from './Pages/Dashboard/sensors/sensors.component';
import {AirquailityComponent} from './Pages/Dashboard/airquaility/airquaility.component';
import { RoomComponent } from './Pages/Dashboard/room/room.component';
import { DataTablesModule } from "angular-datatables";
import { FloorogComponent } from './Pages/Dashboard/floorOverview/floorog/floorog.component';
import { FloorfourComponent } from './Pages/Dashboard/floorOverview/floorfour/floorfour.component';
import { FloorfiveComponent } from './Pages/Dashboard/floorOverview/floorfive/floorfive.component';
import { FloorsixComponent } from './Pages/Dashboard/floorOverview/floorsix/floorsix.component';
import { SensorComponent } from './Pages/Dashboard/sensor/sensor.component';
import {RoomService} from "./Pages/Dashboard/_service/room.service";
import {SensorService} from "./Pages/Dashboard/_service/sensor.service";
import { PersonCountRoomChartComponent } from './Pages/Dashboard/charts/person-count-room-chart/person-count-room-chart.component';
import { WarningsComponent } from './Pages/Dashboard/warnings/warnings.component';
import { OverviewChartMeetingConfComponent } from './Pages/Dashboard/charts/overview-chart-meeting-conf/overview-chart-meeting-conf.component';
import { OverviewChartOfLoadComponent } from './Pages/Dashboard/charts/overview-chart-of-load/overview-chart-of-load.component';
import { FloorplanChartLoadOfFloorComponent } from './Pages/Dashboard/charts/floorplan-chart-load-of-floor/floorplan-chart-load-of-floor.component';
import { OverviewChartFreeOccupiedComponent } from './Pages/Dashboard/charts/overview-chart-free-occupied/overview-chart-free-occupied.component';
import {PortalBeamService} from "./Pages/Dashboard/_service/portal-beam.service";

const meineRouten: Routes = [
    {
        path: '',
        redirectTo: 'dashboard/overview',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        redirectTo: 'dashboard/overview',
        pathMatch: 'full'
    },
    {path: 'index', component: IndexSiteComponent},
    {path: 'login', component: LoginComponent},
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: 'overview',
                component: OverviewComponent,
                canActivate: [AuthGuardService]
            },
            {
                path: 'floorplan',
                component: FloorplanComponent,
                children: [
                    {
                        path: 'floorone',
                        component: FlooroneComponent,
                        canActivate: [AuthGuardService],
                    },
                    {
                        path: 'floortwo',
                        component: FloortwoComponent,
                        canActivate: [AuthGuardService]
                    },
                    {
                        path: 'floorthree',
                        component: FloorthreeComponent,
                        canActivate: [AuthGuardService]
                    },
                ],
            },
            {
                path: 'room/:id',
                component: RoomComponent,
                canActivate: [AuthGuardService]
            },
            {
                path: 'sensors/:id',
                component: SensorComponent,
                canActivate: [AuthGuardService]
            },
            {
                path: 'sensors',
                component: SensorsComponent,
                canActivate: [AuthGuardService]
            },
            {
                path: 'airquality',
                component: AirquailityComponent,
                canActivate: [AuthGuardService]
            },
            {
                path: 'temperature',
                component: TemperatureComponent,
                canActivate: [AuthGuardService]
            },
            {
                path: 'warnings',
                component: WarningsComponent,
                canActivate: [AuthGuardService]
            },
        ],
    },
    {path: '**', component: PageNotFoundComponent, canActivate: [AuthGuardService]}
];

@NgModule({
    declarations: [
        AppComponent,
        IndexSiteComponent,
        PageNotFoundComponent,
        FooterComponent,
        NavbarComponent,
        LoginComponent,
        SidebarComponent,
        DashboardComponent,
        OverviewComponent,
        FloorplanComponent,
        FlooroneComponent,
        FloortwoComponent,
        FloorthreeComponent,
        TemperatureComponent,
        SensorsComponent,
        AirquailityComponent,
        RoomComponent,
        FloorogComponent,
        FloorfourComponent,
        FloorfiveComponent,
        FloorsixComponent,
        SensorComponent,
        PersonCountRoomChartComponent,
        WarningsComponent,
        OverviewChartMeetingConfComponent,
        OverviewChartOfLoadComponent,
        FloorplanChartLoadOfFloorComponent,
        OverviewChartFreeOccupiedComponent
    ],
    imports: [
        RouterModule.forRoot(meineRouten),
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        DataTablesModule
    ],
    providers: [
        AuthGuardService,
        PortalBeamService,
        RoomService,
        SensorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
