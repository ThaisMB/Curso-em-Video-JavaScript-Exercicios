function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var saudacao = window.document.getElementById('saudacao');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora>=0 && hora<12){
        img.src = 'fotomanha.png';
        document.body.style.background = '#ffe887';
        saudacao.innerHTML = 'BOM DIA!'

    }else if(hora>12 && hora<18){
        img.src = 'fototarde.png';
        document.body.style.background = '#f19b50';
        saudacao.innerHTML = 'BOA TARDE!';
    }else{
        img.src = 'fotonoite.png';
        document.body.style.background = '#654c47';
        saudacao.innerText='BOA NOITE!';
    }
}




