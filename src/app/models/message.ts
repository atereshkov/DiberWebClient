import {User} from './user';

export class Message {

  id: number;
  msg: string;
  created_date: number;
  updated_date: number;
  user: User;

  constructor(id: number, msg: string, created_date: number, updated_date: number, user: User) {
    this.id = id;
    this.msg = msg;
    this.created_date = created_date;
    this.updated_date = updated_date;
    this.user = user;
  }

}
