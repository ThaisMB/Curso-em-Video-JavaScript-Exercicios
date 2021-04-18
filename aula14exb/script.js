function mostra_Tabuada(){
    let numero = document.querySelector("input#numero")
    let Tabuada = document.getElementById("selectTabuada")
    if (numero.value.length == 0){
        alert("[ERRO]Por favor, digite um número!")
    } else {
        let n= Number(numero.value);
        let c = 0;
        while (c<=10){
            let linha = document.createElement("option");
            Tabuada.appendChild(linha);
            linha.text = `${n} x ${c} = ${n*c}`;
            linha.value = `Tabuada${c}`;
            c++
        }
    }
    
}
