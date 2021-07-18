import { Cliente } from "../Cliente.js";

// classe abstrata - nunca pode ser instanciada, apenas herdada
export class Conta {

    constructor(pCliente, pAgencia, pSaldoInicial) {
        // estamos usando o get do cliente para ter a verificação se realmente esta recebendo um cliente como parâmetro
        this._cliente = pCliente;
        this._agencia = pAgencia;
        this._saldo = pSaldoInicial;

        if (this.constructor == Conta) {
            // vai lançar um erro
            throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente!");
        }
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

    //metodo abstrato, ou seja, todas as classes que herdarem da classe Conta devem sobreescrever o metodo sacar
    sacar(pValor) {
        // vai lançar um erro
        throw new Error("Você não deveria informar uma taxa para o saque!");
    }

    //metodo privado
    _sacar(pValor, pTaxa) {
        const valorSacado = pTaxa * pValor;

        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            console.log("Saque realizado com sucesso!");

        } else {
            console.log("Você não possui saldo suficiente!");
            valorSacado = 0;
        }

        console.log(`Seu saldo atual: R$${this._saldo}`);
        return valorSacado;
    }

    transferir(pValor, pContaDestino) {
        const valorSacado = this.sacar(pValor);
        pContaDestino.depositar(pValor);
        console.log(`Valor transferido com sucesso para a agencia ${pContaDestino.agencia}, proprietário ${pContaDestino.cliente.nome}`);
        console.log(`Seu saldo atual: R$${this._saldo}`);
    }
}