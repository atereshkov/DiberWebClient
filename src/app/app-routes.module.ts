import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainPageComponent } from "./components/main-page/main-page.component";

export const ROUTES: Routes = [
  //{ path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: '', component: MainPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
