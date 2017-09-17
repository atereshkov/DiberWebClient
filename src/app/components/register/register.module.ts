import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RegisterComponent} from "./register.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    RegisterComponent
  ]
})

export class RegisterModule {

}
