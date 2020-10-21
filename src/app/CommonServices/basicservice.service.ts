import { Injectable } from '@angular/core';

@Injectable()
export class BasicService {
    serviceTitle: string;

    firstName: string;
    lastName: string;

    constructor() {
        this.serviceTitle = "Basic Service";
        this.firstName = "andrew";
        this.lastName = "sam";
    }

    fullName() {
        return(this.firstName + " " + this.lastName);
    }
}