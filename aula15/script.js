const numeros = [];
function adicionar() {
    var inputNumero = document.getElementById("numero");
    var numero = Number(inputNumero.value);

    if (numeros.includes(numero)) {
        alert("[ERRO] Esse número já foi adicionado.");
        return;
    }


    if (numero>100 || numero<0 || inputNumero.value.length==0){
        alert("[ERRO] Digite um número válido!");
        return;
    }

    numeros.push(numero);

    let listaAdicionados = document.getElementById("lista-adicionados");
    let declaraAdicionado = document.createElement("option");
    declaraAdicionado.text = `Valor ${numero} adicionado.`;
    listaAdicionados.appendChild(declaraAdicionado);

    inputNumero.value = "";
    inputNumero.focus();
}

function finalizar() {

    if (numero.value.length==0){
        alert("Adicione valores para ver o resultado!")
       
    } else {

        let resultado = document.getElementById("resultado");
        let somaValores = 0;;
        let maiorValor;
        let menorValor;
        let mediaValores;
        let nOrdenados = numeros.sort((a, b) => {
            if (a == b) return 0;
            return a < b ? -1 : 1;
        });

        for (let posicao in numeros) {
            somaValores += numeros[posicao];
        }

        let textoComprimento = document.createElement("p");
        resultado.appendChild(textoComprimento);
        textoComprimento.innerHTML = `Ao todo, temos ${numeros.length} valores digitados`

        let textoSoma = document.createElement("p");
        resultado.appendChild(textoSoma);
        textoSoma.innerHTML = `Somando todos os valores temos ${somaValores}.`

        let textoMaior = document.createElement("p");
        resultado.appendChild(textoMaior);
        textoMaior.innerHTML =`O maior valor informado foi ${nOrdenados[nOrdenados.length-1]}.`

        let textoMenor = document.createElement("p");
        resultado.appendChild(textoMenor);
        textoMenor.innerHTML =`O menor valor informado foi ${nOrdenados[0]}.`

        mediaValores = somaValores/numeros.length;

        let textoMedia = document.createElement("p");
        resultado.appendChild(textoMedia);
        textoMedia.innerHTML = `A média dos valores digitados é ${mediaValores}.`
    }
}
