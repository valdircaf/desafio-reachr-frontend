import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NzCardModule } from 'ng-zorro-antd/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { VagasComponent } from './pages/vagas/vagas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AjustesComponent } from './pages/ajustes/ajustes.component';
import { FormUpdateVagaComponent } from './components/form-update-vaga/form-update-vaga.component';
import { FormAddVagaComponent } from './components/form-add-vaga/form-add-vaga.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VagasComponent,
    NavbarComponent,
    AjustesComponent,
    FormUpdateVagaComponent,
    FormAddVagaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCardModule,
    RouterModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
