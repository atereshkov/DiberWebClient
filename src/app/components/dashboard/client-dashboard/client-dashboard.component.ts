import { Component, OnInit } from '@angular/core';
import {StatisticsService} from '../../../services/statistics.service';
import {UserAuthority} from '../../../helper/user.authority';
import {User} from '../../../models/user';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: 'client-dashboard.component.html',
  styleUrls: ['client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {

  public totalOrders = 0;
  public totalAddresses = 0;
  public totalTickets = 0;
  public loading = false;

  constructor(private statService: StatisticsService) { }

  ngOnInit() {
    this.loadStatisticsData();
  }

  private loadStatisticsData() {
    this.loading = true;

    const user: User = UserAuthority.getCurrentUser();

    this.statService.getClientStatistics(user.id)
      .subscribe(
        data => {
          this.loading = false;
          this.totalOrders = data.orders_count;
          this.totalAddresses = data.addresses_count;
          this.totalTickets = data.tickets_count; // TODO change to only active ("In progress") tickets
        },
        err => {
          console.error(err);
          this.loading = false;
        }
      );
  }

}
