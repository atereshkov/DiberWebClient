import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientGuard} from '../../../guards/client.guard';
import {ClientDashboardComponent} from './client-dashboard.component';
import {ClientOverviewComponent} from './content/client-overview/client-overview.component';

export const routes: Routes = [
  {
    path: 'dashboard/client', component: ClientDashboardComponent, canActivate: [ClientGuard],
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        component: ClientOverviewComponent,
        canActivate: [ClientGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientDashboardRoutingModule {

}
