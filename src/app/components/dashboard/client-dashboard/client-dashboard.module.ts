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
import {ClientOrderDetailsModule} from './content/client-order-details/client-order-details.module';
import {ClientSupportListModule} from './content/client-support-list/client-support-list.module';
import {ClientSupportAddModule} from './content/client-support-add/client-support-add.module';
import {ClientSupportDetailsModule} from './content/client-support-details/client-support-details.module';
import {ClientAddressDetailsModule} from './content/client-address-details/client-address-details.module';

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
    ClientAddressEditModule,
    ClientOrderDetailsModule,
    ClientSupportListModule,
    ClientSupportAddModule,
    ClientSupportDetailsModule,
    ClientAddressDetailsModule
  ],
  declarations: [
    ClientDashboardComponent
  ]
})

export class ClientDashboardModule {

}
