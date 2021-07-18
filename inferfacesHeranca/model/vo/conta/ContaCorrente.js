import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    static numeroContas = 0;

    constructor(pCliente, pAgencia) {
        super(pCliente, pAgencia, 0);
        ContaCorrente.numeroContas++;
        console.log(`Conta Corrente aberta com sucesso! Seu saldo atual é R$${this._saldo}`);
    }

    //quando a classe pai (Conta) ja possui esse metodo e declaro novemnte, significa que ele vai sobreescrever -- @overwrite java
    sacar(pValor) {
        return super._sacar(pValor, 1.1);
    }
}