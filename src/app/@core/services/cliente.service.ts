import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import ICliente from "../common/interfaces/cliente.interface";

/**
 * classe de serviço que fará todo acesso à base de dados de clientes que, no caso, é o localstorage
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
        //realiza a leitura dos dados do localstorage
        const dadosLocalStorage: string | null = localStorage.getItem('clientesArray');
        let arrayClientes: ICliente[] = [];
        //se já houver algum dado no localstorage, salva no array que será retornado
        if(dadosLocalStorage !== null) {
            arrayClientes = JSON.parse(dadosLocalStorage);
        }
        return arrayClientes;
    }

    /**
     * função que busca um cliente pelo seu id
     * @param id id do cliente buscado
     * @returns um objeto do tipo ICliente
     */
    public buscaClientePeloId(id: number): ICliente {
        const arrayClientes: ICliente[]= this.retornaTodosClientes();
        return arrayClientes.find((cliente: ICliente) => cliente.id === id);
    }

    /**
     * função que salva os dados do cliente (novo ou jpá existente) na base de dados
     */
    public salvar(cliente: ICliente): void {
        const arrayClientes: ICliente[]= this.retornaTodosClientes();

        //se o cliente já existe, possui um id
        //serão atualizados os dados de um cliente já existente
        if(cliente.id !== null) {
            const indice = arrayClientes.findIndex((clienteAtual: ICliente) => clienteAtual.id === cliente.id);
            arrayClientes[indice] = cliente;
        }else {//se o cliente não possui um id, ele é um novo cliente
            //serão salvos os dados do novo cliente

            //se for o primeiro cliente a ser cadastrado seu índice será zero
            let idAtual: number = 0;
            //se não for o primeiro cliente o arrayClientes não será vazio
            //então atualiza o idAtual
            if(arrayClientes.length !== 0) {
                //busca o último id que foi cadastrado
                const ultimoId: number = arrayClientes.map((item: ICliente) => item.id).reduce((anterior: number, atual: number) => Math.max(anterior, atual));
                //incrementa o último id para definir o id do cliente que será criado
                idAtual = ultimoId+1;
            }

            //guarda os dados do cliente que vieram do formulário
            const {nome, email, telefone, status} = cliente;
            //adiciona o novo cliente no array de clientes
            arrayClientes.push({id: idAtual, nome: nome, email: email, telefone: telefone, status: status});
        }

        localStorage.setItem('clientesArray', JSON.stringify(arrayClientes));

        //volta para a tela de listagem do cliente
        this.irRotaListagemCliente();
    }

    /**
     * função que realiza a exclusão de um cliente pelo id
     * @param id id do cliente a ser excluído
     */
    public excluirClientePeloId(id: number): void {
        let arrayClientes: ICliente[]= this.retornaTodosClientes();

        //busca o cliente que deve ser excluído
        //salva na variável , caso exista
        const clienteASerDeletado: ICliente = this.buscaClientePeloId(id);

        //caso exista o cliente que foi buscado no passo anterior
        //filtra o array de clientes mantendo somente os que têm o id diferente do passado para essa função
        if(clienteASerDeletado) {
            arrayClientes = arrayClientes.filter((clienteAtual: ICliente) => clienteAtual.id !== id);
            localStorage.setItem('clientesArray', JSON.stringify(arrayClientes));
        }
    }

    /**
     * função que invoca a rota de listagem de clientes
     */
    public irRotaListagemCliente(): void {
        this.rota.navigate(['/clientes/listagem']);
    }
}
