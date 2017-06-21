import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AuthComponent } from "./components/auth/auth.component";
import { LoggedInGuard } from "./guards/logged-in.guard"

export const ROUTES: Routes = [
  //{ path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: '', component: MainPageComponent },
  { path: 'signin', component: AuthComponent, canActivate: [LoggedInGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
