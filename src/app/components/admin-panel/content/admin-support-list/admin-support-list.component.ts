import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {SortService} from '../../../../services/sort.service';
import {TicketService} from '../../../../services/ticket.service';
import {Ticket} from '../../../../models/ticket';
import {UserAuthority} from '../../../../helper/user.authority';
import {User} from '../../../../models/user';

@Component({
  selector: 'app-admin-support-list',
  templateUrl: './admin-support-list.component.html',
  styleUrls: ['./admin-support-list.component.css']
})
export class AdminSupportListComponent implements OnInit {

  tickets: Ticket[];

  loading = false;
  total = 0;
  page = 1;
  limit = 10;

  @Output() onTicketsLoaded: EventEmitter<any> = new EventEmitter<any>();

  constructor(private ticketService: TicketService, private sortService: SortService, private router: Router) {
    this.tickets = [];
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.loading = true;
    const user: User = UserAuthority.getCurrentUser();
    this.ticketService.getAllTickets(this.page - 1, this.limit)
      .subscribe(
        data => {
          this.tickets = data.content;
          this.total = data.totalElements;
          this.loading = false;
          this.sortService.sort(this.tickets, {sortColumn: 'id', sortDirection: 'asc'});
        },
        err => {
          this.logError(err);
          this.loading = false;
        }
      );
  }

  // Pagination

  goToPage(n: number) {
    this.page = n;
    this.loadData();
  }

  onNext() {
    this.page++;
    this.loadData();
  }

  onPrev() {
    this.page--;
    this.loadData();
  }

  // Sorting

  onSorted($event) {
    this.tickets = this.sortService.sort(this.tickets, $event);
  }

  // TODO Logger
  logError(error) {
    console.error('Error: ' + error.message ? error.message : error.toString());
  }

  // Public Actions

  public openDetails(ticket: Ticket) {
    this.router.navigate(['/dashboard/admin/support', ticket.id]);
  }

}
