import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminGuard} from '../../guards/admin.guard';
import {AdminPanelComponent} from './admin-panel.component';
import {OrderListComponent} from './content/order-list/order-list.component';
import {UserListComponent} from './content/user-list/user-list.component';
import {AddressListComponent} from './content/address-list/address-list.component';
import {AdminOverviewComponent} from './content/admin-overview/admin-overview.component';
import {AdminSearchComponent} from './content/admin-search/admin-search.component';
import {AdminStatisticsComponent} from './content/admin-statistics/admin-statistics.component';
import {AdminAnalyticsComponent} from './content/admin-analytics/admin-analytics.component';

export const routes: Routes = [
  {
    path: 'dashboard/admin', component: AdminPanelComponent, canActivate: [AdminGuard],
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        component: AdminOverviewComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'orders',
        component: OrderListComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'users',
        component: UserListComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'addresses',
        component: AddressListComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'search',
        component: AdminSearchComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'statistics',
        component: AdminStatisticsComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'analytics',
        component: AdminAnalyticsComponent,
        canActivate: [AdminGuard],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule {

}
