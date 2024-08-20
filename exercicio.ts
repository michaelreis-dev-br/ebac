function multiplicacao(valor1: number, valor2: number): number {
  const resultadoDaMultiplicacao = valor1 * valor2;
  return resultadoDaMultiplicacao;
}

function saudacao(nome: string): string {
  const mensagemDeSaudacao = `Olá, ${nome}`;
  return mensagemDeSaudacao;
}

console.log(multiplicacao(5, 2));
console.log(saudacao("Michael"));
