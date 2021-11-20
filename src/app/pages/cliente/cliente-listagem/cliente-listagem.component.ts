import { Component, OnInit } from "@angular/core";
import ICliente from "../../../@core/common/interfaces/cliente.interface";
import { ClienteService } from "../../../@core/services/cliente.service";

@Component({
    templateUrl: "./cliente-listagem.component.html",
})
export class ClienteListagemComponent implements OnInit {

    _clientes: ICliente[] = [];

    constructor(private _clienteService: ClienteService) {}

    ngOnInit(): void {
        //busca os dados de todos os clientes para a listagem
        this._atualizaVariavelClientes();
    }

    /**
     * função que chama o serviço para excluir um cliente da base de dados
     * @param id id do cliente que será excluído
     */
    public excluir(id: number): void {
        this._clienteService.excluirClientePeloId(id);
        this._atualizaVariavelClientes();
    }

    /**
     * função que atualiza a variável de classe _clientes
     * busca todos os clientes cadastrados na base de dados
     */
    private _atualizaVariavelClientes(): void {
        this._clientes = this._clienteService.retornaTodosClientes();
    }

}
