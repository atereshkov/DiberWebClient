import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminUserAddComponent} from './admin-user-add.component';
import {LoadingIndicatorModule} from '../../../common/loading-indicator/loading-indicator.module';

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AdminUserAddComponent
  ]
})

export class AdminUserAddModule {

}
