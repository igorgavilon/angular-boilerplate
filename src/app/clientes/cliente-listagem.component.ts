import { Component, OnInit } from "@angular/core";
import ICliente from "../@core/common/interfaces/cliente.interface";
import { EnumStatusCliente } from "../@core/common/tipos/tipos";
import { ClienteService } from "../@core/services/cliente.service";

@Component({
    selector: "app-cliente-listagem",
    templateUrl: "./cliente-listagem.component.html",
})
export class ClienteListagemComponent implements OnInit {

    _clientes: ICliente[] = [];

    constructor(private _clienteService: ClienteService) {}

    ngOnInit(): void {
        this._clientes = this._clienteService.retornaTodosClientes();
    }

}
