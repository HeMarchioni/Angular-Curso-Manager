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
            {
                path: '**', component: Error404Component     // -> se Url for uma rota que nao existe chama o componente Erro404
            }
        ])
    ],
    exports: [
        NavBarComponent
    ]

})




export class CoreModule {

}