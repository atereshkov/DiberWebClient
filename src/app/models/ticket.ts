export class Ticket {

  id: number;
  status: string;
  title: number;
  created_date: number;
  updated_date: number;

  constructor(id: number, status: string, title: number, created_date: number, updated_date: number) {
    this.id = id;
    this.status = status;
    this.title = title;
    this.created_date = created_date;
    this.updated_date = updated_date;
  }

}
