import { Component, OnInit } from '@angular/core';
import {Message} from '../../../../models/message';
import {Ticket} from '../../../../models/ticket';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TicketService} from '../../../../services/ticket.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from '../../../../services/message.service';
import {UserAuthority} from '../../../../helper/user.authority';
import {User} from '../../../../models/user';

@Component({
  selector: 'app-admin-support-details',
  templateUrl: './admin-support-details.component.html',
  styleUrls: ['./admin-support-details.component.css']
})
export class AdminSupportDetailsComponent implements OnInit {

  public ticket: Ticket;
  public messages: Message[];
  private id: number;

  public ticketDataForm: FormGroup;
  private formBuilder: FormBuilder;

  public loading = false;
  public msgLoading = false;

  constructor(private ticketService: TicketService, private messageService: MessageService, private route: ActivatedRoute,
              private router: Router) {
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
