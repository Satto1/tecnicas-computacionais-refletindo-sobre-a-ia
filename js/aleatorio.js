const nomes = ["Danilo", "Lucas", "Janderson", "Regiane", "Vinicius", "Kaio", "Fatima"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
