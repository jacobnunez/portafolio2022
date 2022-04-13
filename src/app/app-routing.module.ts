import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { DiseniadorComponent } from './components/diseniador/diseniador.component';
import { FuncionarioComponent } from './components/funcionario/funcionario.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'admin', component: AdministradorComponent },
  { path: 'diseniador', component: DiseniadorComponent},
  { path: 'funcionario', component: FuncionarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
