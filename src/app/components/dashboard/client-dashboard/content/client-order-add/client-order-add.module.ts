import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoadingIndicatorModule} from '../../../../common/loading-indicator/loading-indicator.module';
import {ClientOrderAddComponent} from './client-order-add.component';

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ClientOrderAddComponent
  ]
})

export class ClientOrderAddModule {

}
