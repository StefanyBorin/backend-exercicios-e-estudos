const carro = {
    ligado: false,
    velocidade: 0,
    retornaStatusCarro: function () {
        return this.ligado ? "Ligado" : "Desligado";
    },
    imprimirMensagemStatus: function () {
        console.log(`carro ${this.retornaStatusCarro()}. Velocidade ${this.velocidade}`);
    },
    ligar: function () {

        if (this.ligado === true) {
            console.log("Este carro já esta ligado");
        } else {
            this.ligado = true;
            this.imprimirMensagemStatus();
        }
    },
    desligar: function () {

        if (this.ligado === false) {
            console.log("Este carro já esta desligado");
        } else {
            this.ligado = false;
            this.velocidade = 0;
            this.imprimirMensagemStatus();
        }
    },
    acelerar: function () {
        if (this.ligado === false) {
            console.log("Não é possivel acelerar um carro desligado");
        } else if (this.ligado) {
            this.velocidade += 10;
            this.imprimirMensagemStatus();
        }
    },
    desacelerar: function () {
        if (this.ligado === false) {
            console.log("Não é possivel desacelerar um carro desligado");
        } else {
            this.velocidade -= 10;
            this.imprimirMensagemStatus();
    }   }
}
carro.desligar()
carro.ligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desligar()
carro.acelerar()
carro.desacelerar()