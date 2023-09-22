const celular = 43999552506;


function formatarCelular(numero){
    const celularString = String(numero);

    if (celularString.length === 8) 
    {
        const iniciais = celularString.slice(0, 4);
        const iniciaisFormadado = iniciais.padStart(7, " 9 ");
        const finais = celularString.slice(4).padStart(5, "-");
        console.log(iniciaisFormadado +finais);
    
    } else if (celularString.length === 9) {
        const iniciais = celularString.slice(1, 5);
        const nove = celularString.slice(0,1);
        const finais = celularString.slice(5);
        const iniciaisFormadado = `${nove} ${iniciais}-${finais}`;
        console.log(iniciaisFormadado);
    } else {
        const iniciais = celularString.slice(3, 7);
        const nove = celularString.slice(2,3);
        const ddd = celularString.slice(0, 2)
        const finais = celularString.slice(7);
        const nFormatado = `(${ddd}) ${nove} ${iniciais}-${finais}`;
        console.log(nFormatado);
    }
}

formatarCelular(celular)
