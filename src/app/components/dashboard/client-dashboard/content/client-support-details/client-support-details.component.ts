import { Component, OnInit } from '@angular/core';
import {Ticket} from '../../../../../models/ticket';
import {TicketService} from '../../../../../services/ticket.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Message} from '../../../../../models/message';
import {MessageService} from '../../../../../services/message.service';
import {User} from '../../../../../models/user';
import {UserAuthority} from '../../../../../helper/user.authority';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-client-support-details',
  templateUrl: './client-support-details.component.html',
  styleUrls: ['./client-support-details.component.css']
})
export class ClientSupportDetailsComponent implements OnInit {

  public ticket: Ticket;
  public messages: Message[];
  public tickets: Ticket[];
  private id: number;

  public ticketDataForm: FormGroup;
  private formBuilder: FormBuilder;

  public loading = false;
  public msgLoading = false;
  public ticketsLoading = false;

  constructor(private ticketService: TicketService, private messageService: MessageService, private route: ActivatedRoute,
              private router: Router) {
    this.tickets = [];
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.formBuilder = new FormBuilder();
    this.initializeEmptyForm();
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

    this.loadTickets();
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

  private loadTickets() {
    this.ticketsLoading = true;
    const user: User = UserAuthority.getCurrentUser();
    this.ticketService.getAllUserTickets(user.id)
      .subscribe(
        data => {
          this.tickets = data;
          this.ticketsLoading = false;
        },
        err => {
          // this.logError(err); // TODO
          this.ticketsLoading = false;
        }
      );
  }

  public sendMessage() {
    this.msgLoading = true;

    const user: User = UserAuthority.getCurrentUser();

    const message: Message = {
      id: null,
      msg: this.ticketDataForm.value.message,
      created_date: null,
      updated_date: null,
      user: user
    };

    this.messageService.sendMessage(this.id, user.id, message)
      .subscribe(ticket => {
        this.msgLoading = false;
        this.initializeEmptyForm();
        this.loadMessages();
      }, error => {
        // TODO parse error (handle 400 bad request)
        this.msgLoading = false;
      });
  }

  private initializeEmptyForm() {
    this.ticketDataForm = this.formBuilder.group({
      message: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  public isMyMessage(message: Message): boolean {
    const user: User = UserAuthority.getCurrentUser();
    return message.user.id === user.id;
  }

  public onTicketClick(ticket: Ticket) {
    this.router.navigate(['/dashboard/client/support/', ticket.id]);
  }

}

