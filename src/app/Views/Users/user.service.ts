import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor() { }
    getUsers(): User[] { 
        return [
            { 
                id: 1, 
                firstName: "john", 
                lastName: "duo"
            }, 
            {
                id: 2, 
                firstName: "margeret", 
                lastName: "brown"
            }
        ]
    }
}