import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SortableTableModule} from '../../../common/sortable-table/sortable-column.module';
import {PaginationModule} from '../../../common/pagination/pagination.module';
import {LoadingIndicatorModule} from '../../../common/loading-indicator/loading-indicator.module';
import {AdminSupportListComponent} from './admin-support-list.component';
import {TimeAgoPipeModule} from '../../../common/timeago-pipe-module/timeago-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    PaginationModule,
    SortableTableModule,
    RouterModule,
    TimeAgoPipeModule
  ],
  declarations: [
    AdminSupportListComponent
  ]
})

export class AdminSupportListModule {

}
