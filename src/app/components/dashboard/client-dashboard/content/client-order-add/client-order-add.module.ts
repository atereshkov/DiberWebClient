import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoadingIndicatorModule} from '../../../../common/loading-indicator/loading-indicator.module';
import {ClientOrderAddComponent} from './client-order-add.component';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    FormsModule,
    ReactiveFormsModule,
    MultiselectDropdownModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ClientOrderAddComponent
  ]
})

export class ClientOrderAddModule {

}
