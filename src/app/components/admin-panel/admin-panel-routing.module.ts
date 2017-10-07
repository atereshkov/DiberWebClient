import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminGuard} from "../../guards/admin.guard";
import {AdminPanelComponent} from "./admin-panel.component";
import {OrderListComponent} from "./content/order-list/order-list.component";

export const routes: Routes = [
  {
    path: 'dashboard/admin', component: AdminPanelComponent, canActivate: [AdminGuard],
    children: [
      {
        path: 'orders',
        component: OrderListComponent,
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
