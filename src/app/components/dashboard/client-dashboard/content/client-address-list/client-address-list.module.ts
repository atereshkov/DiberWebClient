import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SortableTableModule} from '../../../../common/sortable-table/sortable-column.module';
import {PaginationModule} from '../../../../common/pagination/pagination.module';
import {LoadingIndicatorModule} from '../../../../common/loading-indicator/loading-indicator.module';
import {ClientAddressListComponent} from './client-address-list.component';

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    PaginationModule,
    SortableTableModule
  ],
  declarations: [
    ClientAddressListComponent
  ]
})

export class ClientAddressListModule {

}
