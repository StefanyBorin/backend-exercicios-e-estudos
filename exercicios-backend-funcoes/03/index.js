const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    //-----------letra A / letra B / letra C----------
    imprimirResumo: function () {

        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);

        console.log(`Total a pagar: ${(this.calcularTotalAPagar() / 100).toFixed(2)}`);
    },

    //--------- letra F-------------

    addProduto: function (novoItem) {
        let ondeExisteProduto = -1;

        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id === novoItem.id) {
                ondeExisteProduto = i;
                break;
            }
        }

        if (ondeExisteProduto === -1) {
            this.produtos.push(novoItem)

        } else {
            this.produtos[ondeExisteProduto].qtd += novoItem.qtd;
        }
    },

    // -------------- letra G -----------------

    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);

        for (let i = 0; i < this.produtos.length; i++) {

            let produto = this.produtos[i];
            let precoReal = (produto.precoUnit / 100).toFixed(2);

            console.log(`Item ${i + 1} - ${produto.nome} - ${produto.qtd} und -  R$ ${precoReal}`);
        }
    },
    //------------------letra H---------
    calcularTotalDeItens: function () {
        let quantidadeItens = 0;

        for (const item of this.produtos) {
            quantidadeItens += item.qtd;
        }
        return quantidadeItens;
    },
    calcularTotalAPagar: function () {
        let valorTotalItens = 0;

        for (let i = 0; i < this.produtos.length; i++) {

            let soma = this.produtos[i].precoUnit * this.produtos[i].qtd;
            valorTotalItens += soma;
        }

        let valorEmReais = valorTotalItens;

        return valorEmReais;
    },
    calcularDesconto: function () {
        let qtdTotalItens = this.calcularTotalDeItens();
        let precoTotalItens = this.calcularTotalAPagar();

        let descontoDeItens = this.produtos[0].precoUnit;
        let descontoAcima100 = 0;
        for (let i = 0; i < this.produtos.length; i++) {

            if (this.produtos[i].precoUnit < descontoDeItens) {
                descontoDeItens = this.produtos[i].precoUnit;
            }
        }
        if (qtdTotalItens > 4) {
            precoTotalItens - descontoDeItens;
        }
        if (precoTotalItens > 10000) {
            descontoAcima100 = precoTotalItens * 0.1;
        }

        return descontoAcima100 > descontoDeItens ? descontoAcima100 : descontoDeItens;

    }
}




//-------------- letra D / letra E-----------

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novaBermuda)
carrinho.addProduto(novoTenis)

console.log(`O desconto a ser dado na compra total é de R$ ${(carrinho.calcularDesconto() / 100).toFixed(2)}`);

carrinho.imprimirResumo();
carrinho.imprimirDetalhes();
