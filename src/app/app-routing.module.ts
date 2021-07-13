import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './componentes/body/body.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  { path:'inicio', component: InicioComponent },
  { path:'body', component: BodyComponent },
  { path: '**', pathMatch:'full', redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
