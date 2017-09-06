import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-admin-panel',
  templateUrl: 'admin-panel.component.html',
  styleUrls: ['admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  totalOrders = 0;

  constructor() {
  }

  ngOnInit() {
  }

  public loadOrdersCount(count: any): void {
    this.totalOrders = count;
  }

}
