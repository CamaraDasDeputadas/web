import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeputadosComponent } from './pages/deputados/deputados.component';
import {HttpClientModule} from '@angular/common/http';
import { DeputadoViewComponent } from './pages/deputado-view/deputado-view.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import {NgHttpLoaderModule} from 'ng-http-loader';
import { AcertoBaixoComponent } from './pages/acerto-baixo/acerto-baixo.component';
import { AcertoMedioComponent } from './pages/acerto-medio/acerto-medio.component';
import { AcertoAltoComponent } from './pages/acerto-alto/acerto-alto.component';

@NgModule({
  declarations: [
    AppComponent,
    DeputadosComponent,
    DeputadoViewComponent,
    HomeComponent,
    SobreComponent,
    QuizComponent,
    AcertoBaixoComponent,
    AcertoMedioComponent,
    AcertoAltoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
