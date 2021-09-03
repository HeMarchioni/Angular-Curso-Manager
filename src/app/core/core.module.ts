import {NgModule} from "@angular/core";
import {NavBarComponent} from "./component/nav-bar/nav-bar.component";
import {RouterModule} from "@angular/router";
import {Error404Component} from "./component/error404/error-404.component";



@NgModule({
    declarations: [
       NavBarComponent,
        Error404Component
    ],
    imports:[
        RouterModule.forChild([

        ])
    ],
    exports: [
        NavBarComponent,
    ]

})




export class CoreModule {

}