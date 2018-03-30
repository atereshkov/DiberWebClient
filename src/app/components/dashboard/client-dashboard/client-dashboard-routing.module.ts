import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientGuard} from '../../../guards/client.guard';
import {ClientDashboardComponent} from './client-dashboard.component';
import {ClientOverviewComponent} from './content/client-overview/client-overview.component';
import {ClientOrderListComponent} from './content/client-order-list/client-order-list.component';
import {ClientAddressListComponent} from './content/client-address-list/client-address-list.component';
import {ClientAddressAddComponent} from './content/client-address-add/client-address-add.component';
import {ClientOrderAddComponent} from './content/client-order-add/client-order-add.component';
import {ClientOrderEditComponent} from './content/client-order-edit/client-order-edit.component';
import {ClientAddressEditComponent} from './content/client-address-edit/client-address-edit.component';

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
      },
      {
        path: 'orders',
        component: ClientOrderListComponent,
        canActivate: [ClientGuard]
      },
      {
        path: 'orders/new',
        component: ClientOrderAddComponent,
        canActivate: [ClientGuard]
      },
      {
        path: 'orders/:id/edit',
        component: ClientOrderEditComponent,
        canActivate: [ClientGuard]
      },
      {
        path: 'addresses',
        component: ClientAddressListComponent,
        canActivate: [ClientGuard]
      },
      {
        path: 'addresses/new',
        component: ClientAddressAddComponent,
        canActivate: [ClientGuard]
      },
      {
        path: 'addresses/:id/edit',
        component: ClientAddressEditComponent,
        canActivate: [ClientGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientDashboardRoutingModule {

}
