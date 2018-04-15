export class Message {

  id: number;
  msg: string;
  title: number;
  created_date: number;
  updated_date: number;

  constructor(id: number, msg: string, title: number, created_date: number, updated_date: number) {
    this.id = id;
    this.msg = msg;
    this.title = title;
    this.created_date = created_date;
    this.updated_date = updated_date;
  }

}
