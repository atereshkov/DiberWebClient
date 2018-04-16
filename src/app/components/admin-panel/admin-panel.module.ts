import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminPanelComponent} from './admin-panel.component';
import {AdminPanelRoutingModule} from './admin-panel-routing.module';
import {OrderListModule} from './content/order-list/order-list.module';
import {UserListModule} from './content/user-list/user-list.module';
import {AddressListModule} from './content/address-list/address-list.module';
import {AdminOverviewModule} from './content/admin-overview/admin-overview.module';
import {AdminUserAddModule} from './content/admin-user-add/admin-user-add.module';
import {AdminSupportListModule} from './content/admin-support-list/admin-support-list.module';

@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    OrderListModule,
    UserListModule,
    AddressListModule,
    AdminOverviewModule,
    AdminUserAddModule,
    AdminSupportListModule
  ],
  declarations: [
    AdminPanelComponent
  ]
})

export class AdminPanelModule {

}
