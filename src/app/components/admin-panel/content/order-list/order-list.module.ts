import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OrderListComponent} from "./order-list.component";
import {LoadingIndicatorModule} from "../../../common/loading-indicator/loading-indicator.module";
import {PaginationModule} from "../../../common/pagination/pagination.module";

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    PaginationModule
  ],
  declarations: [
    OrderListComponent
  ]
})

export class OrderListModule {

}
