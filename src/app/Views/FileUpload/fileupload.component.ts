import { Component } from "@angular/core";

@Component({
    selector: "app-fileupload", 
    templateUrl: "./fileupload.component.html", 
    styleUrls: [ "./fileupload.component.css" ]
})

export class FileUploadComponent {
    title: string;
    localUrl: any[];

    constructor() {
        this.title = "File Upload!";    
    }

    showPreview(event: any) {
        if(event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (event: any) => {
                this.localUrl = event.target.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }
}