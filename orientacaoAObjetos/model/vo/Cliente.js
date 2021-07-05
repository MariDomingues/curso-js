//import {ContaCorrente} from './model/vo/ContaCorrente.js'

export class Cliente {

    nome;
    _cpf;

    constructor(pNome, pCpf) {
        this.nome = pNome;
        this._cpf = pCpf
    }

    get cpf() {
        return this._cpf;
    }
}