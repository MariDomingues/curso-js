import { Cliente } from './model/vo/Cliente.js'
import { ContaCorrente } from './model/vo/ContaCorrente.js'

const mariane = new Cliente("Mariane", 40382476867);
const ricardo = new Cliente("Ricardo", 40382476869);

console.log("Conta Mariane:")
const contaCorrenteMariane = new ContaCorrente(mariane,1001);
contaCorrenteMariane.depositar(300);
const valorSaque = contaCorrenteMariane.sacar(50);
console.log(`Valor sacado: R$${valorSaque}`);

console.log("\n\n\nConta Ricardo:")
const contaCorrenteRicardo = new ContaCorrente(ricardo, 1001);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.transferir(50, contaCorrenteMariane);

console.log(ContaCorrente.numeroContas);