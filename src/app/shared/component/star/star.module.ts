import {NgModule} from "@angular/core";
import {StarComponent} from "./star.component";


@NgModule({
    declarations: [
        StarComponent
    ],
    exports: [
        StarComponent         // -Exportar o componente que ira ser utilizado por outro modulo
    ]

})




export class StarModule {

}