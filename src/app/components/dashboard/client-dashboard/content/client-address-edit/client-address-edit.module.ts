import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoadingIndicatorModule} from '../../../../common/loading-indicator/loading-indicator.module';
import {ClientAddressEditComponent} from './client-address-edit.component';

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ClientAddressEditComponent
  ]
})

export class ClientAddressEditModule {

}
