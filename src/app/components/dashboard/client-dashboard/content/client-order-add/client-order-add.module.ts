import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoadingIndicatorModule} from '../../../../common/loading-indicator/loading-indicator.module';
import {ClientOrderAddComponent} from './client-order-add.component';
import {MyDatePickerModule} from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    FormsModule,
    ReactiveFormsModule,
    MyDatePickerModule
  ],
  declarations: [
    ClientOrderAddComponent
  ]
})

export class ClientOrderAddModule {

}
