import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminPanelComponent} from "./admin-panel.component";
import {AdminPanelRoutingModule} from "./admin-panel-routing.module";
import {OrderListModule} from "./content/order-list/order-list.module";

@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    OrderListModule
  ],
  declarations: [
    AdminPanelComponent
  ]
})

export class AdminPanelModule {

}
