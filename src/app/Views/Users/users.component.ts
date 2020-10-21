import { Component, OnInit } from "@angular/core";
import { User } from './user.model';
import { UserService } from './user.service';


@Component({
    selector: "app-users", 
    templateUrl: "./users.component.html", 
    styleUrls: [ "./users.component.css" ]
})

export class UsersComponent implements OnInit {
    title: string;
    users: User[];
    selectedUser: User;


    constructor(private userService: UserService) {
        this.title = "Users";
    }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.users = this.userService.getUsers();
    }

    onSelect(user: User) {
        this.selectedUser = user;
    }
}