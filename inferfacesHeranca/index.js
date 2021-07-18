import { Cliente } from './model/vo/Cliente.js'
import { ContaCorrente } from './model/vo/conta/ContaCorrente.js'
import { ContaPoupanca } from './model/vo/conta/ContaPoupanca.js'
import { Diretor } from './model/vo/funcionario/Diretor.js';
import { Gerente } from './model/vo/funcionario/Gerente.js';
import { SistemaAutenticacao } from './model/vo/sistemaAutenticacao/SistemaAutenticacao.js';

const mariane = new Cliente("Mariane", 40382476867);
const ricardo = new Cliente("Ricardo", 40382476869);

console.log("Conta Corrente:");
console.log("\nConta Mariane:");
const contaCorrenteMariane = new ContaCorrente(mariane, 1001);
contaCorrenteMariane.depositar(300);
const valorSaque = contaCorrenteMariane.sacar(50);
console.log(`Valor sacado: R$${valorSaque}`);

console.log("\n\n\nConta Ricardo:")
const contaCorrenteRicardo = new ContaCorrente(ricardo, 1001);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.transferir(50, contaCorrenteMariane);

console.log(ContaCorrente.numeroContas);


console.log("\n\n\nConta Poupança:");
console.log("\nConta Mariane:");
const contaPoupancaMariane = new ContaPoupanca(mariane, 1001, 2000);
console.log(contaPoupancaMariane);


console.log("\n\n\nFuncionários:");
const diretor = new Diretor("Rodrigo", 10000, 12345678910);
diretor.cadastrarSenha("123");

const gerente = new Gerente("Fábio", 5000, 34545678910);
gerente.cadastrarSenha("456");

const cliente = new Cliente("Lais", 34545678910, "789");

console.log("Login Diretor: " + SistemaAutenticacao.login(diretor, "123"));
console.log("Login Gerente: " + SistemaAutenticacao.login(gerente, "456"));
console.log("Login Cliente: " + SistemaAutenticacao.login(cliente, "789"));
