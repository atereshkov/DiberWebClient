import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminPanelComponent} from "./admin-panel.component";
import {AdminPanelRoutingModule} from "./admin-panel-routing.module";
import {OrderListComponent} from "./order-list/order-list.component";
import {PaginationComponent} from "../common/pagination/pagination.component";
import {LoadingIndicatorComponent} from "../common/loading-indicator/loading-indicator.component";
import {OrderListModule} from "./order-list/order-list.module";

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
