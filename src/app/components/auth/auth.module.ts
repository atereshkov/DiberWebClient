import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AuthComponent} from "./auth.component";
import {LoadingIndicatorComponent} from "../common/loading-indicator/loading-indicator.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AuthComponent,
    LoadingIndicatorComponent
  ]
})

export class AuthModule {

}
