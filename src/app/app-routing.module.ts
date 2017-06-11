import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import {AuthComponent} from "./components/auth/auth.component";

export const ROUTES: Routes = [
  //{ path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: '', component: MainPageComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: 'signin', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
