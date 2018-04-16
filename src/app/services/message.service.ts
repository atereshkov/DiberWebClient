import {api} from '../constants/api';
import {BaseService} from './base.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Message} from "../models/message";

@Injectable()
export class MessageService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getMessages(ticket_id: number): Observable<any> {
    const headers = this.getBearerHeaders();
    return this.http.get(api.TICKETS_ALL + '/' + ticket_id + '/messages', {
      headers: headers
    });
  }

  sendMessage(ticketId: number, userId: number, message: Message): Observable<any> {
    const headers = this.getBearerHeaders();
    return this.http.post('api/v1/users/' + userId + '/tickets/' + ticketId + '/messages', message, {
      headers: headers
    });
  }

}
