import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {

    //atributo privado coloca o _ na frent. Ex.: _saldo

    constructor(pCliente, pAgencia, pSaldoInicial) {
        super(pCliente, pAgencia, pSaldoInicial);
        console.log(`Conta Poupança aberta com sucesso! Seu saldo atual é R$${this._saldo}`);
    }

    //quando a classe pai (Conta) ja possui esse metodo e declaro novemnte, significa que ele vai sobreescrever -- @overwrite java
    sacar(pValor) {
        return super._sacar(pValor, 1.02);
    }
}