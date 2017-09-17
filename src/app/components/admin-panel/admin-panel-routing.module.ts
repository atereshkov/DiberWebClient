import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminGuard} from "../../guards/admin.guard";
import {AdminPanelComponent} from "./admin-panel.component";

export const routes: Routes = [
  {
    path: 'dashboard/admin', component: AdminPanelComponent, canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule {

}
