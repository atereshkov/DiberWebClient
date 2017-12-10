import {Component, OnInit} from '@angular/core';
import {StatisticsService} from '../../services/statistics.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: 'admin-panel.component.html',
  styleUrls: ['admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  totalOrders = 0;
  totalUsers = 0;
  loading = false;

  constructor(private statService: StatisticsService) {
  }

  ngOnInit() {
    this.loadStatisticsData();
  }

  private loadStatisticsData() {
    this.loading = true;
    this.statService.getStatistics()
      .subscribe(
        data => {
          this.loading = false;
          this.totalOrders = data.orders_count;
          this.totalUsers = data.users_count;
          console.log(data);
        },
        err => {
          console.error(err);
          this.loading = false;
        }
      );
  }


}
