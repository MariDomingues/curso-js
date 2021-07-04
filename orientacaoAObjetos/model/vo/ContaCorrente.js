class ContaCorrente {

    agencia;
    //atributo privado _saldo
    _saldo;

    constructor() {
        this._saldo = 0;
        console.log(`Conta aberta com sucesso! Seu saldo atual é R$${this._saldo}`);
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
}

export { ContaCorrente }