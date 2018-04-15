import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationModule} from '../../../../common/pagination/pagination.module';
import {LoadingIndicatorModule} from '../../../../common/loading-indicator/loading-indicator.module';
import {SortableTableModule} from '../../../../common/sortable-table/sortable-column.module';
import {RouterModule} from '@angular/router';
import {ClientSupportListComponent} from './client-support-list.component';
import {TimeAgoPipe} from 'time-ago-pipe';

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    PaginationModule,
    SortableTableModule,
    RouterModule
  ],
  declarations: [
    ClientSupportListComponent,
    TimeAgoPipe
  ]
})

export class ClientSupportListModule {

}
