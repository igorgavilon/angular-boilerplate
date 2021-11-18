import { NgModule } from "@angular/core";
import { ThemeModule } from "../@theme/theme.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { ExampleComponent } from './example/example.component';
import { ClienteListagemComponent } from "../clientes/cliente-listagem.component";
import { CommonModule } from "@angular/common";

@NgModule({
	imports: [
        CommonModule,
        PagesRoutingModule,
        ThemeModule,
	],
	declarations: [
		PagesComponent,
		ExampleComponent,
        ClienteListagemComponent,
	],
	providers: []
})
export class PagesModule { }
