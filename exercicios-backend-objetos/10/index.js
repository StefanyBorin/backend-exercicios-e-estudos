// clientes
const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

//adicionar 1 tv, 2 cabos usb e uma webcam para Jose;

jose.carrinho.push(tv,caboUsb, caboUsb)
console.log(jose);

// Adicione 2 notebooks para o Carlos

carlos.carrinho.push(notebook, notebook)


// 1 teclado, 2 usb, 1 carregador, 1 mouse, 1 monitor - patricia

patricia.carrinho.push(teclado, caboUsb, caboUsb, mouse, monitor)

//5 webcam renato

renato.carrinho.push(webcam, webcam, webcam, webcam, webcam)

// 1 webcam, 2 usb, 1 monitor roberto

roberto.carrinho.push(webcam, caboUsb, caboUsb, monitor)

console.log(carlos, jose, patricia, renato, roberto);