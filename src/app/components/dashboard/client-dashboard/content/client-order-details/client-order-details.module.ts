import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientOrderDetailsComponent} from './client-order-details.component';
import {LoadingIndicatorModule} from '../../../../common/loading-indicator/loading-indicator.module';

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule
  ],
  declarations: [
    ClientOrderDetailsComponent
  ]
})

export class ClientOrderDetailsModule {

}
