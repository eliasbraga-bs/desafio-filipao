// classe Heroi
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "ataque desconhecido";
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Solicita ao usuário para digitar o nome, idade e tipo do herói
const nomeHeroi = prompt("Digite o nome do herói:");
const idadeHeroi = parseInt(prompt("Digite a idade do herói:"));
const tipoHeroi = prompt("Digite o tipo do herói:");

// Cria um objeto Heroi com os valores fornecidos pelo usuário
const heroi = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);

// Chama o método atacar do objeto Heroi
heroi.atacar();
