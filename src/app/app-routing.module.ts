import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VagasComponent } from './pages/vagas/vagas.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'vagas', component: VagasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
