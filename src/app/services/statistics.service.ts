import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {api} from '../constants/api';
import {BaseService} from './base.service';

@Injectable()
export class StatisticsService extends BaseService {

  private static STATISTICS_URL = api.STATISTICS;

  constructor(private http: HttpClient) {
    super();
  }

  getStatistics(): Observable<any> {
    const headers = this.getBearerHeaders();
    return this.http.get(StatisticsService.STATISTICS_URL, {
      headers: headers
    });
  }

}
