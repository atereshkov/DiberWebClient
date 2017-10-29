import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule, RequestOptions, XHRBackend, Http} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppComponent} from "./app.component";
import {NotAuthorizedGuard} from "./guards/not-authorized.guard";
import {AuthService} from "./services/auth.service";
import {AdminGuard} from "./guards/admin.guard";
import {OrderService} from "./services/order.service";
import {httpFactory} from "./services/interceptors/http.factory";
import {Router} from "@angular/router";
import {ClientGuard} from "./guards/client.guard";
import {CourierGuard} from "./guards/courier.guard";
import {LoggedInGuard} from "./guards/logged-in.guard";
import {AdminPanelModule} from "./components/admin-panel/admin-panel.module";
import {LandingPageModule} from "./components/landing-page/landing-page.module";
import {LandingHeaderComponent} from "./components/landing-page/header/header.component";
import {LandingFooterComponent} from "./components/landing-page/footer/footer.component";
import {RegisterModule} from "./components/register/register.module";
import {AuthModule} from "./components/auth/auth.module";
import {CourierDashboardModule} from "./components/dashboard/courier-dashboard/courier-dashboard.module";
import {ClientDashboardModule} from "./components/dashboard/client-dashboard/client-dashboard.module";
import {PageNotFoundModule} from "./components/page-not-found/page-not-found.module";
import {ProfileModule} from "./components/profile/profile.module";
import {SettingsModule} from "./components/settings/settings.module";
import {DashboardModule} from "./components/dashboard/dashboard.module";
import {UserService} from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    LandingFooterComponent,
    LandingHeaderComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    LandingPageModule,
    DashboardModule,
    ProfileModule,
    SettingsModule,
    CourierDashboardModule,
    ClientDashboardModule,
    PageNotFoundModule,
    RegisterModule,
    AuthModule,
    AdminPanelModule,
    AppRoutingModule
  ],
  providers: [
    NotAuthorizedGuard,
    AdminGuard,
    CourierGuard,
    ClientGuard,
    LoggedInGuard,
    AuthService,
    OrderService,
    UserService,
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, Router]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
