//import {ContaCorrente} from './model/vo/ContaCorrente.js'

export class Cliente {

    constructor(pNome, pCpf, pSenha) {
        this.nome = pNome;
        this._cpf = pCpf
        this._senha = pSenha;
    }

    get cpf() {
        return this._cpf;
    }

    get senha() {
        return this._senha;
    }
}