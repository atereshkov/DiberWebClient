import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminPanelComponent} from "./admin-panel.component";
import {AdminPanelRoutingModule} from "./admin-panel-routing.module";
import {OrderListComponent} from "./order-list/order-list.component";
import {PaginationComponent} from "../common/pagination/pagination.component";

@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutingModule
  ],
  declarations: [
    AdminPanelComponent,
    OrderListComponent,
    PaginationComponent
  ]
})

export class AdminPanelModule {

}
