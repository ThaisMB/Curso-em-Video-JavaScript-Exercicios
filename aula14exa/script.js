function contar(){
    // te amo <3
    var inicio = document.getElementById("inicio");
    var n_Inicio = Number(inicio.value);
    
    var fim = document.getElementById("final");
    var n_Fim = Number(fim.value);
    
    var passo = document.getElementById("passo");
    var n_Passo = Number(passo.value);

    var resultado = document.getElementById("resultado");
    
    var c = iniciarContagem(n_Inicio, n_Fim, n_Passo);

    if (inicio.value.length==0 || fim.value.length==0 || passo.value.lentgh==0 ||Math.abs(n_Inicio)-Math.abs(n_Fim)===0){
        resultado.innerHTML = "Impossível contar! Tente novamente"
    } else{
        
        resultado.innerHTML= "Contando..."
        var p = document.createElement('p');
        resultado.appendChild(p);
    
        resultado.appendChild(p);
        p.innerHTML = c.join(' ');
    }       
}

function iniciarContagem(inicio, final, passo){
    var contagem =[];
    var maozinha = '&#128073';
    var bandeira = '&#127937';

    if (final>inicio){
        if (passo==0){
            passo=1;
        }
        for (var c =inicio; c<=final; c+=passo){
            if (c<final && c+passo<=final){
                contagem.push(`${c} ${maozinha}`);
            } else if (c==final){
                contagem.push(`${c} ${bandeira}`);
            }
            
        }
    } else if (inicio>final){
        if (passo==0){
            passo=-1
        }
        for (var c =inicio; c>=final; c+=passo){    
            if (c>final && c+passo>=final){
                contagem.push(`${c} ${maozinha}`);
            } else {
                contagem.push(`${c} ${bandeira}`);
            }
            
        }
    }
    return contagem;
}
