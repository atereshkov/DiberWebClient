import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ticket} from '../../../../../models/ticket';
import {Router} from '@angular/router';
import {SortService} from '../../../../../services/sort.service';
import {UserAuthority} from '../../../../../helper/user.authority';
import {User} from '../../../../../models/user';
import {TicketService} from '../../../../../services/ticket.service';

@Component({
  selector: 'app-client-support-list',
  templateUrl: './client-support-list.component.html',
  styleUrls: ['./client-support-list.component.css']
})
export class ClientSupportListComponent implements OnInit {

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
    this.ticketService.getUserTickets(user.id, this.page - 1, this.limit)
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

  public newTicketClick() {
    this.router.navigate(['/dashboard/client/support/add']);
  }

  public openDetails(ticket: Ticket) {
    this.router.navigate(['/dashboard/client/support', ticket.id]);
  }


}
