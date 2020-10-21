import { Component } from "@angular/core";

@Component({
    selector: "app-layout", 
    template: `
    <nav class="navbar fixed-top navbar-expand-sm navbar-light bg-dark">
        <a [routerLink]="['/']"  class="navbar-brand">Resp. Nav</a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navList3">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navList3">
            <ul class="navbar-nav">
                <li class="nav-item"><a [routerLink]="['/']"  class="nav-link">home</a></li>
                <li class="nav-item"><a [routerLink]="['/aboutus']"  class="nav-link">about us</a></li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link active dropdown-toggle" data-toggle="dropdown">
                        forms 
                    </a>
                    <div class="dropdown-menu">
                        <a [routerLink]="['/templateform']"  class="dropdown-item">template form</a>
                        <a [routerLink]="['/reactiveform']"  class="dropdown-item">reactive form</a>
                    </div>
                </li>
                <li class="nav-item"><a [routerLink]="['/crudoperations']"  class="nav-link">crud operations</a></li>
                <li class="nav-item dropdown">
                    <a href="#"  class="nav-link active dropdown-toggle" data-toggle="dropdown">
                        validations 
                    </a>
                    <div class="dropdown-menu">
                        <a [routerLink]="['/templateformvalidations']" class="dropdown-item">template form validation</a>
                        <a [routerLink]="['/reactiveformvalidations']" class="dropdown-item">reactive form validation</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a href="#"  class="nav-link active dropdown-toggle" data-toggle="dropdown">
                        services 
                    </a>
                    <div class="dropdown-menu">
                        <a [routerLink]="['/basicservice']"  class="dropdown-item">basic service</a>
                        <a [routerLink]="['/observables']"  class="dropdown-item">observables</a>
                        <a [routerLink]="['/subscribe']"  class="dropdown-item">subscribe</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a href="#"  class="nav-link active dropdown-toggle" data-toggle="dropdown">
                        misc.,
                    </a>
                    <div class="dropdown-menu">
                        <a [routerLink]="['/directives']"  class="dropdown-item">directives</a>
                        <a [routerLink]="['/pipes']"  class="dropdown-item">pipes</a>
                        <a [routerLink]="['/fileupload']"  class="dropdown-item">file upload</a>
                        <a [routerLink]="['/unittest']"  class="dropdown-item">unit test</a>
                    </div>
                </li>
                <li class="nav-item"><a [routerLink]="['/users']"  class="nav-link">users</a></li>
                <li class="nav-item"><a [routerLink]="['/contactus']"  class="nav-link">contact us</a></li>
            </ul>
        </div>
    </nav>
    <router-outlet><router-outlet>
    `
})

export class AppLayout {

}