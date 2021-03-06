import { DetalheDicaComponent } from './../pages/detalhe-dica/detalhe-dica.component';
import { DicasFinaisComponent } from './../pages/dicas/dicas.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ConfirmacaoGameComponent } from '../pages/confirmacao-game/confirmacao.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DataService } from './../service/data.service';

import { AreasSalvasComponent } from './../components/areas-salvas/salvos.component';
import { DadosPoliciaComponent } from './../components/dados-policia/dados-policia.component';
import { MapaScoreComponent } from './../components/mapa-score/mapa-score.component';
import { QuestionarioComponent } from './../pages/questionario/questionario.component';
import { DicasComponent } from "./../components/dicas/dicas.component";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AreasSalvasComponent,
    DadosPoliciaComponent,
    ConfirmacaoGameComponent,
    MapaScoreComponent,
    QuestionarioComponent,
    DicasComponent,
    DetalheDicaComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ConfirmacaoGameComponent,
    QuestionarioComponent,
    DetalheDicaComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
