import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { AppComponent } from '../Views/Home/app.component';
import { AboutUsComponent } from "../Views/AboutUs/aboutus.component";
import { ContactUsComponent } from '../Views/ContactUs/contactus.component';
import { TemplateFormComponent } from '../Views/TemplateForm/templateform.component';
import { ReactiveFormComponent } from '../Views/ReactiveForm/reactiveform.component';
import { CrudOperationsComponent } from '../Views/CrudOperations/crudoperations.component';
import { TemplateFormValidationsComponent } from '../Views/TemplateFormValidations/templateformvalidations.component';
import { ReactiveFormValidationsComponent } from '../Views/ReactiveFormValidations/reactiveformvalidations.component';
import { PipesComponent } from '../Views/Pipes/pipes.component';
import { CapitalizePipe } from '../CapitalizePipe/capitalize.pipe';
import { DirectivesComponent } from '../Views/Directives/directives.component';
import { FileUploadComponent } from '../Views/FileUpload/fileupload.component';
import { BasicServiceComponent } from '../Views/BasicService/basicservice.component';
import { BasicService } from '../CommonServices/basicservice.service';
import { ObservablesComponent } from '../Views/Observables/observables.component';
import { ObservablesService } from '../CommonServices/observables.service';
import { UsersComponent } from '../Views/Users/users.component';
import { UserService } from '../Views/Users/user.service';
import { AppLayout } from '../Layout/app.layout';
import { AppRouting } from '../Routing/routing.module';
import { SubscribeComponent } from '../Views/Subscribe/subscribe.component';
import { StudentService } from '../CommonServices/student.service';
import { ProductComponent } from '../Views/Product/product.component';
import { UnitTestComponent } from '../Views/UnitTest/unittest.component';

@NgModule({
  declarations: [
    AppComponent, 
    AboutUsComponent, 
    ContactUsComponent, 
    TemplateFormComponent, 
    ReactiveFormComponent, 
    CrudOperationsComponent, 
    TemplateFormValidationsComponent, 
    ReactiveFormValidationsComponent, 
    PipesComponent, 
    CapitalizePipe, 
    DirectivesComponent, 
    FileUploadComponent, 
    BasicServiceComponent, 
    ObservablesComponent, 
    UsersComponent, 
    SubscribeComponent, 
    ProductComponent, 
    UnitTestComponent, 
    AppLayout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule, 
    JsonpModule, 
    AppRouting
  ],
  providers: [
    BasicService, 
    ObservablesService, 
    UserService, 
    StudentService
  ],
  bootstrap: [
    AppLayout
  ]
})
export class AppModule { }
