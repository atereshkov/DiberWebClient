import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthComponent } from './components/auth/auth.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CourierDashboardComponent } from './components/courier-dashboard/courier-dashboard.component';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { LoggedInGuard } from "./guards/logged-in.guard";
import { AuthService } from "./services/auth.service";
import { RegisterComponent } from './components/register/register.component';
import { AdminGuard } from "./guards/admin.guard";
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LandingHeaderComponent } from './components/landing-page/header/header.component';
import { LandingFooterComponent } from "./components/landing-page/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AuthComponent,
    AdminPanelComponent,
    CourierDashboardComponent,
    ClientDashboardComponent,
    RegisterComponent,
    LandingPageComponent,
    LandingHeaderComponent,
    LandingFooterComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    LoggedInGuard,
    AdminGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
