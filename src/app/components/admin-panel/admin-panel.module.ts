import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminPanelComponent} from "./admin-panel.component";
import {AdminPanelRoutingModule} from "./admin-panel-routing.module";
import {OrderListModule} from "./content/order-list/order-list.module";
import {UserListModule} from "./content/user-list/user-list.module";
import {AddressListModule} from "./content/address-list/address-list.module";

@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    OrderListModule,
    UserListModule,
    AddressListModule
  ],
  declarations: [
    AdminPanelComponent
  ]
})

export class AdminPanelModule {

}
