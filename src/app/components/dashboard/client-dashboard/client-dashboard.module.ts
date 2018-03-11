import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientDashboardComponent} from './client-dashboard.component';
import {ClientDashboardRoutingModule} from './client-dashboard-routing.module';
import {ClientOverviewModule} from './content/client-overview/client-overview.module';

@NgModule({
  imports: [
    CommonModule,
    ClientDashboardRoutingModule,
    ClientOverviewModule
  ],
  declarations: [
    ClientDashboardComponent
  ]
})

export class ClientDashboardModule {

}
