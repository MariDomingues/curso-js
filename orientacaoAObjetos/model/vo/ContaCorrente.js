import { Cliente } from "./Cliente.js";

export class ContaCorrente {

    agencia;

    //atributo privado
    _saldo;
    _cliente;

    static numeroContas = 0;

    constructor(pCliente, pAgencia) {
        // estamos usando o get do cliente para ter a verificação se realmente esta recebendo um cliente como parâmetro
        this.cliente = pCliente;
        this.agencia = pAgencia;
        this._saldo = 0;
        ContaCorrente.numeroContas++;
        console.log(`Conta aberta com sucesso! Seu saldo atual é R$${this._saldo}`);
    }

    set cliente(pCliente) {
        if (pCliente instanceof Cliente) {
            this._cliente = pCliente;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    depositar(pValor) {
        if (pValor < 0) {
            console.log("Não é possível realizar o deposito!");

        } else {
            this._saldo += pValor;
            console.log("Deposito realizado com sucesso!");
            console.log(`Seu saldo atual: R$${this._saldo}`);
        }
    }

    sacar(pValor) {
        if (this._saldo >= pValor) {
            this._saldo -= pValor;
            console.log("Saque realizado com sucesso!");

        } else {
            console.log("Você não possui saldo suficiente!");
            pValor = 0;
        }

        console.log(`Seu saldo atual: R$${this._saldo}`);
        return pValor;
    }

    transferir(pValor, pContaDestino) {
        const valorSacado = this.sacar(pValor);
        pContaDestino.depositar(pValor);
        console.log(`Valor transferido com sucesso para a agencia ${pContaDestino.agencia}, proprietário ${pContaDestino.cliente.nome}`);
        console.log(`Seu saldo atual: R$${this._saldo}`);
    }
}