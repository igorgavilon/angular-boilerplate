import { EnumStatusCliente } from "../tipos/tipos";

/**
 * interface que define os atributos de cliente
 */
export default interface ICliente {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    status: EnumStatusCliente;
}
