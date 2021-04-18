function verificar(){
    var data = new Date;
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.querySelector("div#res");

    if(fano.value.length==0||fano.value>ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    }else{
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var gênero = '';
        var img = document.createElement("img");
        img.setAttribute("id", "foto");
        if (fsex[0].checked){
            gênero = "Homem";
            if (idade>=0 && idade<12){
                img.setAttribute("src", "menino.png");
            } else if(idade<35){
                img.setAttribute("src", "moco.png");
            }else if(idade<60){
                img.setAttribute("src", "homem.png");
            }else{
                img.setAttribute("src", "idoso.png");
            }
        } else if (fsex[1].checked){
            gênero = "Mulher" ;
            if (idade>=0 && idade<12){
                img.setAttribute("src", "menina.png");
            } else if(idade<35){
                img.setAttribute("src", "moca.png");
            }else if(idade<60){
                img.setAttribute("src", "mulher.png");
            }else{
                img.setAttribute("src", "idosa.png")
            }
        }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img);
    }
}