import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ClienteFormularioComponent } from "../cliente/cliente-formulario/cliente-formulario.component";
import { ClienteListagemComponent } from "../cliente/cliente-listagem/cliente-listagem.component";
import { ThemeModule } from "../../@theme/theme.module";
import { ClientesRoutingModule } from "./clientes-routing.module";
import { ClientesComponent } from "./clientes.component";
import { FormsModule } from "@angular/forms";

@NgModule({
	imports: [
        CommonModule,
        FormsModule,
        ClientesRoutingModule,
        ThemeModule,
	],
	declarations: [
		ClientesComponent,
        ClienteListagemComponent,
        ClienteFormularioComponent,
	],
	providers: []
})
export class ClientesModule { }
