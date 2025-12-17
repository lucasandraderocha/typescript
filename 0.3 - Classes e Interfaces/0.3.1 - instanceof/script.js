class Animal {
    respirar() {
        return "Ar para dentro...";
    }
    andar() {
        return "tap tap tap...";
    }
}
class Cachorro extends Animal {
    latir() {
        return "Au au!";
    }
}
const meuPet = new Cachorro();
console.log(meuPet.latir());
console.log(meuPet.andar());
class Carro {
    dirigir() {
        return "Vrum Vrum";
    }
}
class Aviao {
    voar() {
        return "Decolando!";
    }
}
function transportar(veiculo) {
    if (veiculo instanceof Carro) {
        console.log(veiculo.dirigir());
    }
    else {
        console.log(veiculo.voar());
    }
}
const tecoteco = new Aviao();
const corsinha = new Carro();
transportar(corsinha);
function returnValue(veiculo) {
    if (veiculo instanceof Carro) {
        return "VRUUUUUUUUUUUUUUUUM";
    }
    else {
        return "vrum vrum vrum";
    }
}
let corsinhaAmarelo = new Carro();
console.log(returnValue(corsinhaAmarelo));
export {};
//# sourceMappingURL=script.js.map