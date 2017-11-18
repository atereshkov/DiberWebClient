import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SortableColumnComponent} from './sortable-column.component';
import {SortableTableDirective} from './sortable-table.directive';
import {SortService} from '../../../services/sort.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SortableTableDirective,
    SortableColumnComponent
  ],
  exports: [
    SortableColumnComponent,
    SortableTableDirective
  ],
  providers: [
    SortService
  ]
})

export class SortableTableModule {

}
