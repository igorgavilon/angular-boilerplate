import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import ICliente from "src/app/@core/common/interfaces/cliente.interface";
import { EnumStatusCliente } from "src/app/@core/common/tipos/tipos";
import { ClienteService } from "src/app/@core/services/cliente.service";

@Component({
    templateUrl: "./cliente-formulario.component.html"
})
export class ClienteFormularioComponent implements OnInit {

    _cliente: ICliente;
    _formReadOnly: boolean;

    constructor(private _activatedRoute: ActivatedRoute, private _clienteService: ClienteService) {
        //inicializa variável que define se o formulário é somente leitura
        this._formReadOnly = false;
    }

    ngOnInit(): void {
        //variável que guarda o nome de parte da rota que chamou esse componente. exemplos:
        // '/clientes/editar/id' => opcao = 'editar'; '/clientes/detalhes/id' => opcao = 'detalhes';
        // '/clientes/novo' => opcao = 'novo';
        const opcao: string = this._activatedRoute.snapshot.url[0].path;

        if(opcao === "novo") {
            //se for para criar um novo cliente, variável recebe um cliente com atributos nulos
            this._cliente = {id: null, nome: null, email: null, telefone: null, status: EnumStatusCliente.ATIVO};
        }else {
            //caso o cliente já exista, variável recebe os dados do cliente que se deseja editar ou ver os detalhes
            this._cliente = this._clienteService.buscaClientePeloId(+this._activatedRoute.snapshot.paramMap.get("id"));
            if(opcao === "detalhes") {
                //se o usuário só quer ver os detalhes do cliente o formulário será somente leitura
                this._formReadOnly = true;
            }
        }
    }

    /**
     * função que salva os dados do cliente que estavam no formulário
     * @param form variável de formulário recebida do html
     */
    public salvar(form: NgForm): void {
        this._clienteService.salvar(form.value);
    }

}
