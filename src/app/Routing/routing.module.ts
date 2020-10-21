import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../Views/Home/app.component';
import { AboutUsComponent } from "../Views/AboutUs/aboutus.component";
import { TemplateFormComponent } from '../Views/TemplateForm/templateform.component';
import { ReactiveFormComponent } from '../Views/ReactiveForm/reactiveform.component';
import { CrudOperationsComponent } from '../Views/CrudOperations/crudoperations.component';
import { TemplateFormValidationsComponent } from '../Views/TemplateFormValidations/templateformvalidations.component';
import { ReactiveFormValidationsComponent } from '../Views/ReactiveFormValidations/reactiveformvalidations.component';
import { BasicServiceComponent } from '../Views/BasicService/basicservice.component';
import { ObservablesComponent } from '../Views/Observables/observables.component';
import { DirectivesComponent } from '../Views/Directives/directives.component';
import { PipesComponent } from '../Views/Pipes/pipes.component';
import { FileUploadComponent } from '../Views/FileUpload/fileupload.component';
import { UsersComponent } from '../Views/Users/users.component';
import { ContactUsComponent } from '../Views/ContactUs/contactus.component';
import { SubscribeComponent } from '../Views/Subscribe/subscribe.component';
import { UnitTestComponent } from '../Views/UnitTest/unittest.component';

export const allRoutes: Routes = [
    { path: "", component: UnitTestComponent }, 
    { path: "aboutus", component: AboutUsComponent }, 
    { path: "templateform", component: TemplateFormComponent }, 
    { path: "reactiveform", component: ReactiveFormComponent }, 
    { path: "crudoperations", component: CrudOperationsComponent }, 
    { path: "templateformvalidations", component: TemplateFormValidationsComponent }, 
    { path: "reactiveformvalidations", component: ReactiveFormValidationsComponent }, 
    { path: "basicservice", component: BasicServiceComponent }, 
    { path: "observables", component: ObservablesComponent }, 
    { path: "directives", component: DirectivesComponent }, 
    { path: "pipes", component: PipesComponent }, 
    { path: "fileupload", component: FileUploadComponent }, 
    { path: "contactus", component: ContactUsComponent }, 
    { path: "users", component: UsersComponent }, 
    { path: "subscribe", component: SubscribeComponent }, 
    { path: "unittest", component: UnitTestComponent }, 
    { path: "**", component: AppComponent } 
];

export const AppRouting: ModuleWithProviders<any> = RouterModule.forRoot(allRoutes);