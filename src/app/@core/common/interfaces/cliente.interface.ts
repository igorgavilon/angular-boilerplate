import { EnumStatusCliente } from "../tipos/tipos";

export default interface ICliente {
    nome: string;
    email: string;
    telefone: string;
    status: EnumStatusCliente;
}
