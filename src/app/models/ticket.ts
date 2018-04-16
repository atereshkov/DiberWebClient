import {User} from './user';

export class Ticket {

  id: number;
  status: string;
  title: number;
  created_date: number;
  updated_date: number;
  user: User;

  constructor(id: number, status: string, title: number, created_date: number, updated_date: number, user: User) {
    this.id = id;
    this.status = status;
    this.title = title;
    this.created_date = created_date;
    this.updated_date = updated_date;
    this.user = user;
  }

}
