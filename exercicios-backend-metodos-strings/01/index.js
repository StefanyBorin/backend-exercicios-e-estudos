const comentario = "Esse LEAO é muito perigoso!";

if (comentario.includes("covid",) ||
    comentario.includes("Covid",) ||
    comentario.includes("COVID",) ||
    comentario.includes("Pandemia",) ||
    comentario.includes("pandemia",) ||
    comentario.includes("PANDEMIA",)) {
    console.log("Comentário bloqueado por conter palavras proibidas");
} else {
    console.log("Comentário autorizado.");
}