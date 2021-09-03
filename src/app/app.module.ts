import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CourseModule} from "./courses/CourseModule";
import {CoreModule} from "./core/core.module";
import {Error404Component} from "./core/component/error404/error-404.component";

@NgModule({
    declarations: [
        AppComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpClientModule,
      RouterModule.forRoot([    //-> modulo de rotas (forRoot recebe um array de rotas)
        {
        path:'', redirectTo: 'courses',pathMatch:'full'  //-> Url raiz vai para (/courses)
      },
          {
              path: '**', component: Error404Component     // -> se Url for uma rota que nao existe chama o componente Erro404
          }

    ]),
      CourseModule,   // -> importar o outro modulo q esta no curso
      CoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
