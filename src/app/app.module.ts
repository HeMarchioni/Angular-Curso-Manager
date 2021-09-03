import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CourseModule} from "./courses/CourseModule";
import {CoreModule} from "./core/core.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpClientModule,
      CoreModule,
      CourseModule,   // -> importar o outro modulo q esta no curso
    RouterModule.forRoot([    //-> modulo de rotas (forRoot recebe um array de rotas)
        {
        path:'', redirectTo: 'courses',pathMatch:'full'  //-> Url raiz vai para (/courses)
      },

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
