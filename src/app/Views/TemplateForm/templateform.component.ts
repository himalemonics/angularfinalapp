import { Component } from "@angular/core";

@Component({
    selector: "app-templateform", 
    templateUrl: "./templateform.component.html", 
    styleUrls: [ "./templateform.component.css" ]
})

export class TemplateFormComponent {
    title: string;

    fullname: string;
    emailaddress: string;
    mobilenumber: string;
    description: string;

    constructor() {
        this.title = "Template Form!";

        this.fullname = "sam";
        this.emailaddress = "sam@gmail.com"; 
        this.mobilenumber = "+(643) 753 6544";
        this.description = "its sam!";
    }

    displayValues(formValues: any) {
        console.log(formValues);
    }
}