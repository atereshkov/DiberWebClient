import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingIndicatorModule} from '../../../../common/loading-indicator/loading-indicator.module';
import {ClientSupportDetailsComponent} from './client-support-details.component';

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule
  ],
  declarations: [
    ClientSupportDetailsComponent
  ]
})

export class ClientSupportDetailsModule {

}
