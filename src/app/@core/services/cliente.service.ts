import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import ICliente from "../common/interfaces/cliente.interface";
import { EnumStatusCliente } from "../common/tipos/tipos";

/**
 * classe de serviço que fará todo acesso à base de dados de clientes
 */
@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    //define um parâmetro do tipo Router para o uso da função navigate()
    constructor(private rota: Router) { }

    /**
     * função que retorna todos os clientes salvos na base de dados
     * @returns um array de objetos do tipo ICliente
     */
    public retornaTodosClientes(): ICliente[] {
        return CLIENTES;
    }

    /**
     * função que busca um cliente pelo seu id
     * @param id id do cliente buscado
     * @returns um objeto do tipo ICliente
     */
    public buscaClientePeloId(id: number): ICliente {
        return CLIENTES.find((cliente: ICliente) => cliente.id === id);
    }

    /**
     * função que salva os dados do cliente (novo ou jpá existente) na base de dados
     */
    public salvar(cliente: ICliente): void {
        //se o cliente já existe, possui um id
        //serão atualizados os dados de um cliente já existente
        if(cliente.id) {
            const indice = CLIENTES.findIndex((clienteAtual: ICliente) => clienteAtual.id === cliente.id);
            CLIENTES[indice] = cliente;
        }else {//se o cliente não possui um id, ele é um novo cliente
            //serão salvos os dados do novo cliente

            //busca o último id que foi cadastrado
            const ultimoId: number = CLIENTES.map((item: ICliente) => item.id).reduce((anterior: number, atual: number) => Math.max(anterior, atual));
            //incrementa o último id para definir o id do cliente que será criado
            const idAtual: number = ultimoId+1;
            //guarda os dados do cliente que vieram do formulário
            const {nome, email, telefone, status} = cliente;
            //adiciona o novo cliente no array de clientes
            CLIENTES.push({id: idAtual, nome: nome, email: email, telefone: telefone, status: status});
        }

        //volta para a tela de listagem do cliente
        this.irRotaListagemCliente();
    }

    /**
     * função que realiza a exclusão de um cliente pelo id
     * @param id id do cliente a ser excluído
     */
    public excluirClientePeloId(id: number): void {
        //busca o cliente que deve ser excluído
        //salva na variável , caso exista
        const clienteASerDeletado: ICliente = this.buscaClientePeloId(id);

        //caso exista o cliente que foi buscado no passo anterior
        //filtra o array de clientes mantendo somente os que têm o id diferente do passado para essa função
        if(clienteASerDeletado) {
            CLIENTES = CLIENTES.filter((clienteAtual: ICliente) => clienteAtual.id !== id);
        }
    }

    /**
     * função que invoca a rota de listagem de clientes
     */
    public irRotaListagemCliente(): void {
        this.rota.navigate(['/clientes/listagem']);
    }
}

//array do tipo ICliente
//dados mock
var CLIENTES: ICliente[] = [
    {
        id: 1,
        nome: 'André',
        email: 'andre@gmail.com',
        telefone: '67 99990000',
        status: EnumStatusCliente.ATIVO
    },
    {
        id: 2,
        nome: 'Beatriz',
        email: 'beatriz@gmail.com',
        telefone: '67 99991111',
        status: EnumStatusCliente.INATIVO
    }
];
