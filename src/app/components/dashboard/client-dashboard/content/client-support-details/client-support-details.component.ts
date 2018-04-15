import { Component, OnInit } from '@angular/core';
import {Ticket} from '../../../../../models/ticket';
import {TicketService} from '../../../../../services/ticket.service';
import {ActivatedRoute} from '@angular/router';
import {Message} from '../../../../../models/message';
import {MessageService} from "../../../../../services/message.service";
import {User} from "../../../../../models/user";
import {UserAuthority} from "../../../../../helper/user.authority";

@Component({
  selector: 'app-client-support-details',
  templateUrl: './client-support-details.component.html',
  styleUrls: ['./client-support-details.component.css']
})
export class ClientSupportDetailsComponent implements OnInit {

  public ticket: Ticket;
  public messages: Message[];
  private id: number;
  public loading = false;

  constructor(private ticketService: TicketService, private messageService: MessageService, private router: ActivatedRoute) {
    this.id = parseInt(this.router.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.loading = true;

    const user: User = UserAuthority.getCurrentUser();

    this.ticketService.getTicket(this.id, user.id)
      .subscribe((ticket: Ticket) => {
        this.loading = false;
        this.ticket = ticket;
        this.loadMessages();
      });
  }

  private loadMessages() {
    this.loading = true;
    this.messageService.getMessages(this.id)
      .subscribe(
        data => {
          this.messages = data;
          this.loading = false;
        },
        err => {
          // TODO
          this.loading = false;
        }
      );
  }

}

