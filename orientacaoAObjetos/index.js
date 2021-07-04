import { Cliente } from './model/vo/Cliente.js'
import { ContaCorrente } from './model/vo/ContaCorrente.js'

const cliente1 = new Cliente();
cliente1.nome = "Mariane";
cliente1.cpf = 40382476867;

const cliente2 = new Cliente();
cliente2.nome = "Ricardo";
cliente2.cpf = 40382476869;

const contaCorrenteMariane = new ContaCorrente();
contaCorrenteMariane.agencia = 1001;
contaCorrenteMariane.depositar(100);
const valorSaque = contaCorrenteMariane.sacar(50);

console.log(valorSaque);