import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {LoadingIndicatorModule} from '../common/loading-indicator/loading-indicator.module';

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule
  ],
  declarations: [
    ProfileComponent
  ]
})

export class ProfileModule {

}
