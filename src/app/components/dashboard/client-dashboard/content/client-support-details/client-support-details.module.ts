import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingIndicatorModule} from '../../../../common/loading-indicator/loading-indicator.module';
import {ClientSupportDetailsComponent} from './client-support-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ClientSupportDetailsComponent
  ]
})

export class ClientSupportDetailsModule {

}
