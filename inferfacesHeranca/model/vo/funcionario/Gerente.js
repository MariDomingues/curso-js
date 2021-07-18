import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario {
    constructor(pNome, pSalario, pCfp) {
        super(pNome, pSalario, pCfp);
        this._bonificacao = 1.1;
    }
}