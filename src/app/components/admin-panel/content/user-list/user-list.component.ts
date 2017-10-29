import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {User} from "../../../../models/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  loading = false;
  total = 0;
  page = 1;
  limit = 7;

  @Output() onUsersLoaded: EventEmitter<any> = new EventEmitter<any>();

  constructor(private userService: UserService) {
    this.users = [];
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.loading = true;
    this.userService.getUsers(this.page - 1, this.limit)
      .subscribe(
        users => {
          this.users = users.content;
          this.total = users.totalElements;
          this.loading = false;
          this.onUsersLoaded.emit(users.totalElements);
        },
        err => {
          this.logError(err);
          this.loading = false;
        }
      );
  }

  goToPage(n: number) {
    this.page = n;
    this.loadData();
  }

  onNext() {
    this.page++;
    this.loadData();
  }

  onPrev() {
    this.page--;
    this.loadData();
  }

  // TODO Logger
  logError(error) {
    console.error('Error: ' + +error.message ? error.message : error.toString());
  }

}
