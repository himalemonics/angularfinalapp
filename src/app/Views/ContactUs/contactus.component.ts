import { Component } from "@angular/core";

@Component({
    selector: "app-contactus", 
    templateUrl: "./contactus.component.html", 
    styleUrls: [ "./contactus.component.css" ]
})

export class ContactUsComponent {
    title: string;

    fullname: string;
    emailaddress: string;
    mobilenumber: string;
    description: string;

    constructor() {
        this.title = "Contact Us!";

        this.fullname = "sam";
        this.emailaddress = "sam@gmail.com"; 
        this.mobilenumber = "+(643) 753 6544";
        this.description = "its sam!";
    }
}