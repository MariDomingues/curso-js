import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario {
    constructor(pNome, pSalario, pCfp) {
        super(pNome, pSalario, pCfp);
        this._bonificacao = 2;
    }
}