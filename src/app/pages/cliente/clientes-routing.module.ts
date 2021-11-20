import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClienteListagemComponent } from './cliente-listagem/cliente-listagem.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { ClientesComponent } from "./clientes.component";

const routes: Routes = [
	{
		path: '',
		component: ClientesComponent,
        children: [
            {
				path: 'listagem',
				component: ClienteListagemComponent,
			},
            {
				path: 'editar/:id',
				component: ClienteFormularioComponent,
			},
            {
				path: 'detalhes/:id',
				component: ClienteFormularioComponent,
			},
            {
				path: 'novo',
				component: ClienteFormularioComponent,
			}
        ],
	},
];

@NgModule({
	imports: [
        RouterModule.forChild(routes)
    ],
	exports: [RouterModule],
})
export class ClientesRoutingModule { }
