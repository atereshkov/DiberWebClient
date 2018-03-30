import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientDashboardComponent} from './client-dashboard.component';
import {ClientDashboardRoutingModule} from './client-dashboard-routing.module';
import {ClientOverviewModule} from './content/client-overview/client-overview.module';
import {ClientOrderListModule} from './content/client-order-list/client-order-list.module';
import {ClientAddressListModule} from './content/client-address-list/client-address-list.module';
import {ClientAddressAddModule} from './content/client-address-add/client-address-add.module';
import {ClientOrderAddModule} from './content/client-order-add/client-order-add.module';
import {ClientOrderEditModule} from './content/client-order-edit/client-order-edit.module';
import {ClientAddressEditModule} from './content/client-address-edit/client-address-edit.module';

@NgModule({
  imports: [
    CommonModule,
    ClientDashboardRoutingModule,
    ClientOverviewModule,
    ClientOrderListModule,
    ClientAddressListModule,
    ClientAddressAddModule,
    ClientOrderAddModule,
    ClientOrderEditModule,
    ClientAddressEditModule
  ],
  declarations: [
    ClientDashboardComponent
  ]
})

export class ClientDashboardModule {

}
