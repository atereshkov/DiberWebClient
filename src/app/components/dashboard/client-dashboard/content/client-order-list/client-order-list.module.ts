import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientOrderListComponent} from './client-order-list.component';
import {PaginationModule} from '../../../../common/pagination/pagination.module';
import {LoadingIndicatorModule} from '../../../../common/loading-indicator/loading-indicator.module';
import {SortableTableModule} from '../../../../common/sortable-table/sortable-column.module';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    PaginationModule,
    SortableTableModule,
    RouterModule
  ],
  declarations: [
    ClientOrderListComponent
  ]
})

export class ClientOrderListModule {

}
