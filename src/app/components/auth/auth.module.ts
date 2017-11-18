import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthComponent} from './auth.component';
import {LoadingIndicatorModule} from '../common/loading-indicator/loading-indicator.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoadingIndicatorModule
  ],
  declarations: [
    AuthComponent
  ]
})

export class AuthModule {

}
