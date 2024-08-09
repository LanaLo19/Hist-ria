const nomes = ["Fernanda", "Giulia", "Flávia", "Ana", "Amanda", "Rebeca", "Bia"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
