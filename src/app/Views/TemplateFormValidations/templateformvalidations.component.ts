import { Component } from "@angular/core";

@Component({
    selector: "app-templateformvalidations", 
    templateUrl: "./templateformvalidations.component.html", 
    styleUrls: [ "./templateformvalidations.component.css" ]
})

export class TemplateFormValidationsComponent {
    title: string;
    user: userRecord;

    constructor() {
        this.Init();
    }

    Init() {
        this.title = "Template Form Validations!";
        this.user = {
            fullname: "", 
            emailaddress: "", 
            mobilenumber: ""
        }
    }

    showValues(data: userRecord, isValid: boolean) {
        console.log(data, isValid);
    }
}

interface userRecord {
    fullname: string;
    emailaddress: string;
    mobilenumber: string;
}