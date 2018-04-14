import {HttpClient} from '@angular/common/http';
import {api} from '../constants/api';
import {BaseService} from './base.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Ticket} from '../models/ticket';

@Injectable()
export class TicketService extends BaseService {

  private static TICKETS_URL = api.TICKETS_ALL;

  constructor(private http: HttpClient) {
    super();
  }

  getAllTickets(page: number, size: number): Observable<any> {
    const headers = this.getBearerHeaders();
    return this.http.get(TicketService.TICKETS_URL + '?' + 'page=' + page + '&' + 'size=' + size, {
      headers: headers
    });
  }

  getTicket(id: number): Observable<any> {
    const headers = this.getBearerHeaders();
    return this.http.get(TicketService.TICKETS_URL + '/' + id, {
      headers: headers
    });
  }

  getUserTickets(userId: number, page: number, size: number): Observable<any> {
    const headers = this.getBearerHeaders();
    return this.http.get('api/v1/users/' + userId + '/tickets' + '?' + 'page=' + page + '&' + 'size=' + size, {
      headers: headers
    });
  }

  createTicket(userId: number, ticket: Ticket): Observable<any> {
    const headers = this.getBearerHeaders();
    return this.http.post('api/v1/users/' + userId + '/tickets', ticket, {
      headers: headers
    });
  }

}
