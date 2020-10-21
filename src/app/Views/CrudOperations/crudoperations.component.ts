import { Component } from "@angular/core";

@Component({
    selector: "app-crudoperations", 
    templateUrl: "./crudoperations.component.html", 
    styleUrls: [ "./crudoperations.component.css" ]
})

export class CrudOperationsComponent {
    title: string;
    user: userRecord;
    userLists: userRecord[] = [];
    /* userLists = [
        { userName: '', userAge: , userGender: '', userEmailAddress: '', userMobileNumber: '' }, 
        { userName: '', userAge: , userGender: '', userEmailAddress: '', userMobileNumber: '' }, 
        { userName: '', userAge: , userGender: '', userEmailAddress: '', userMobileNumber: '' }, 
        { userName: '', userAge: , userGender: '', userEmailAddress: '', userMobileNumber: '' }, 
    ] */
    index: any;

    constructor() {
        this.Init();
    }

    Init() {
        this.title = "Crud Operations!";
        this.index = 0;
        this.user = {
            userName: "", 
            userAge: 0, 
            userGender: "", 
            userEmailAddress: "", 
            userMobileNumber: ""
        }
    }

    saveRecord() {
        console.log(this.user);
        if(this.index != 0) {
            this.index = 0;
        } else {
            this.userLists.push(this.user);
        }
        this.Init();
    }

    editRecord(i: any) {
        this.index = 1;
        this.user = this.userLists[i];
    }

    deleteRecord(i: any) {
        this.userLists.splice(i, 1);
    }
}

interface userRecord {
    userName: string;
    userAge: number;
    userGender: string;
    userEmailAddress: string;
    userMobileNumber: string;
}