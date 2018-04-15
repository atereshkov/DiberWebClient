import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingIndicatorModule} from '../../../../common/loading-indicator/loading-indicator.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClientSupportAddComponent} from './client-support-add.component';

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ClientSupportAddComponent
  ]
})

export class ClientSupportAddModule {

}
