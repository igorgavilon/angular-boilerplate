import { Injectable } from "@angular/core";
import ICliente from "../common/interfaces/cliente.interface";
import { EnumStatusCliente } from "../common/tipos/tipos";

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    public retornaTodosClientes(): ICliente[] {
        return CLIENTES;
    }
}

var CLIENTES: ICliente[] = [
    {
        nome: 'André',
        email: 'andre@gmail.com',
        telefone: '67 99990000',
        status: EnumStatusCliente.ATIVO
    },
    {
        nome: 'Beatriz',
        email: 'beatriz@gmail.com',
        telefone: '67 99991111',
        status: EnumStatusCliente.INATIVO
    }
];
