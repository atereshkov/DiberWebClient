import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientAddressDetailsComponent} from './client-address-details.component';
import {LoadingIndicatorModule} from '../../../../common/loading-indicator/loading-indicator.module';

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule
  ],
  declarations: [
    ClientAddressDetailsComponent
  ]
})

export class ClientAddressDetailsModule {

}
