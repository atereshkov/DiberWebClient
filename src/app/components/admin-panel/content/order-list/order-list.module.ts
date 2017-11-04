import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OrderListComponent} from "./order-list.component";
import {LoadingIndicatorModule} from "../../../common/loading-indicator/loading-indicator.module";
import {PaginationModule} from "../../../common/pagination/pagination.module";
import {SortableTableModule} from "../../../common/sortable-table/sortable-column.module";

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    PaginationModule,
    SortableTableModule
  ],
  declarations: [
    OrderListComponent
  ]
})

export class OrderListModule {

}
