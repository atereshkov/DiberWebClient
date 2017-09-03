import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {AuthComponent} from "./components/auth/auth.component";
import {LoggedInGuard} from "./guards/logged-in.guard";
import {RegisterComponent} from "./components/register/register.component";
import {AdminGuard} from "./guards/admin.guard";
import {AdminPanelComponent} from "./components/admin-panel/admin-panel.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

export const ROUTES: Routes = [
  //{ path: '', redirectTo: '/main-page', pathMatch: 'full' },
  {path: '', component: LandingPageComponent},
  {path: 'signin', component: AuthComponent, canActivate: [LoggedInGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [LoggedInGuard]},
  {path: 'dashboard', component: DashboardComponent}, // TODO is authenticated
  {path: 'dashboard/admin', component: AdminPanelComponent, canActivate: [AdminGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
