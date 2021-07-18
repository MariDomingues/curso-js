export class Funcionario {
    constructor(pNome, pSalario, pCfp) {
        this._nome = pNome;
        this._salario = pSalario;
        this._cfp = pCfp;

        this._bonificacao;
        this._senha;
    }

    cadastrarSenha(pSenha) {
        this._senha = pSenha;
    }

    autenticar(pSenha) {
        return this._senha == pSenha;
    }
}