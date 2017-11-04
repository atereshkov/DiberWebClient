import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoadingIndicatorModule} from "../../../common/loading-indicator/loading-indicator.module";
import {PaginationModule} from "../../../common/pagination/pagination.module";
import {UserListComponent} from "./user-list.component";
import {SortableTableModule} from "../../../common/sortable-table/sortable-column.module";

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    PaginationModule,
    SortableTableModule
  ],
  declarations: [
    UserListComponent
  ]
})

export class UserListModule {

}
