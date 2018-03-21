import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoadingIndicatorModule} from '../../../../common/loading-indicator/loading-indicator.module';
import {ClientOrderAddComponent} from './client-order-add.component';
import {MyDatePickerModule} from 'mydatepicker';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    FormsModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    MultiselectDropdownModule
  ],
  declarations: [
    ClientOrderAddComponent
  ]
})

export class ClientOrderAddModule {

}
