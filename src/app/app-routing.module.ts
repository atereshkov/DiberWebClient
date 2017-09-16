import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {AuthComponent} from "./components/auth/auth.component";
import {NotAuthorizedGuard} from "./guards/not-authorized.guard";
import {RegisterComponent} from "./components/register/register.component";
import {AdminGuard} from "./guards/admin.guard";
import {AdminPanelComponent} from "./components/admin-panel/admin-panel.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {LoggedInGuard} from "./guards/logged-in.guard";
import {CourierDashboardComponent} from "./components/dashboard/courier-dashboard/courier-dashboard.component";
import {ClientDashboardComponent} from "./components/dashboard/client-dashboard/client-dashboard.component";
import {ClientGuard} from "./guards/client.guard";
import {CourierGuard} from "./guards/courier.guard";
import {SettingsComponent} from "./components/settings/settings.component";
import {ProfileComponent} from "./components/profile/profile.component";

export const ROUTES: Routes = [
  //{ path: '', redirectTo: '/main-page', pathMatch: 'full' },
  {path: '', component: LandingPageComponent},
  {path: 'signin', component: AuthComponent, canActivate: [NotAuthorizedGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [NotAuthorizedGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [LoggedInGuard]},
  {path: 'dashboard/admin', component: AdminPanelComponent, canActivate: [AdminGuard]},
  {path: 'dashboard/courier', component: CourierDashboardComponent, canActivate: [CourierGuard]},
  {path: 'dashboard/client', component: ClientDashboardComponent, canActivate: [ClientGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard]},
  {path: 'settings', component: SettingsComponent, canActivate: [LoggedInGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
