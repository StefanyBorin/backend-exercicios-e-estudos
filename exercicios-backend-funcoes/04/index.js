const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor;
        this.historicos.push({
            tipo: "Depósito",
            valor: valor
        })

        const valorEmReais = (this.saldo / 100).toFixed(2)

        console.log(` Deposito de R$ ${valorEmReais} realizado para o cliente: ${this.nome}.`);
        return valor;
    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}.`);
            return
        } else {
            this.saldo -= valor;
        }
        this.historicos.push({
            tipo: "Saque",
            valor: valor
        });

        console.log(`Saque de R$ ${valor /100 } realizado para o cliente: Maria.`);
        return valor;
    },
    extrato: function(){
        console.log(`Extrato de ${this.nome} - Saldo: R$ ${this.saldo/100}`);
        console.log(`Historico:`);
        for (const movimentacao of this.historicos) {
            console.log(`${movimentacao.tipo} de R$ ${movimentacao.valor / 100}`);
        }
    }
}


contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();