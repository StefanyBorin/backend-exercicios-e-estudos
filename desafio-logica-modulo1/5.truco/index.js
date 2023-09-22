const virada = "Q";

function solucao(carta) {
    let manilha = ""
    if (carta === "Q") {
        manilha = "J";
    } else if (carta === "J") {
        manilha = "K";
    } else if (carta === "K") {
        manilha = "A";
    } else if (carta === "A") {
        manilha = "2";
    } else if (carta === "2") {
        manilha = "3";
    }else if (carta === "3") {
        manilha = "Q";
    }
    console.log(manilha);
}

solucao(virada)