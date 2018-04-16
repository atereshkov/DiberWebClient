import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TicketService} from '../../../../../services/ticket.service';
import {Ticket} from '../../../../../models/ticket';
import {User} from '../../../../../models/user';
import {UserAuthority} from '../../../../../helper/user.authority';

@Component({
  selector: 'app-client-support-add',
  templateUrl: './client-support-add.component.html',
  styleUrls: ['./client-support-add.component.css']
})
export class ClientSupportAddComponent implements OnInit {

  public ticketDataForm: FormGroup;
  private formBuilder: FormBuilder;

  loading = false;

  constructor(private ticketService: TicketService, private router: Router) {
    this.formBuilder = new FormBuilder();
    this.initializeEmptyForm();
  }

  ngOnInit() {

  }

  public saveTicketData() {
    this.loading = true;
    const ticket: Ticket = {
      id: 0,
      title: this.ticketDataForm.value.subject,
      status: null,
      created_date: null,
      updated_date: null,
      user: null
    };

    const user: User = UserAuthority.getCurrentUser();

    this.ticketService.createTicket(user.id, ticket)
      .subscribe(ticket => {
        this.loading = false;
        this.router.navigate(['/dashboard/client/support/']); // TODO open newly created ticket
      }, error => {
        // TODO parse error (handle 400 bad request)
        this.loading = false;
      });
  }

  private initializeEmptyForm() {
    this.ticketDataForm = this.formBuilder.group({
      id: [''],
      subject: ['', [Validators.required, Validators.minLength(2)]],
      message: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  public resetForm() {
    this.initializeEmptyForm();
  }
}
