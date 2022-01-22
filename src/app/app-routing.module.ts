import { NgModule, NgModuleFactory, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
		path: 'clientes',
		loadChildren: (): Promise<NgModuleFactory<any> | Type<any> | any> => import('./pages/cliente/clientes.module').then(module => module.ClientesModule),
	},
    { path: '**', redirectTo: 'clientes/listagem' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
