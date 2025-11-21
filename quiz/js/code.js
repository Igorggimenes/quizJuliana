var respost1 = 0, respost2 = 0, fina = 0;
function resposta1(){
    var elemento = document.getElementById("certa1");
    if(elemento.checked) {document.getElementById("result1").innerHTML = "Resposta Correta!!!!!!!"; respost1 = 1;}
        else document.getElementById("result1").innerHTML = "Resposta Errada :(";  
}
function resposta2(){
    var cert = document.getElementById("c5");
    var corr = document.getElementById("c9");
    var erra = document.getElementById("c7");


    if(corr.checked) respost2 = respost2 + 0.3;
    if(cert.checked) respost2 = respost2 + 0.3;
    if(!(erra.checked)) respost2 = respost2 + 0.3;
    if(respost2 >= 0.9){
        respost2 = 1;
        document.getElementById("result2").innerHTML = "Resposta Correta!!!!!!!";
    }/*
    else{
        document.getElementById("result2").innerHTML = "Resposta Errada :(";
        respost2 = 0;
    }*/
   /* PAROU DE FUNCIONAR QUANDO COLOQUEI ISTO, NÃO SEI O PORQUÊ*/
    
}

var numOnof = 1;
function onof(){
    if(numOnof == 1 ){ 
        document.body.style.backgroundColor = "lightblue";
        numOnof = numOnof - 1;
        document.getElementById("sodofundo").innerHTML = "é so do fundo mesmo, mas achei legal por! ;)";  
}
    else{
        document.body.style.backgroundColor = "black";
        numOnof = numOnof + 1;
    }

}
function final(){
    fina = respost1 + respost2;
    document.getElementById("final").innerHTML = "Voce obteve " + fina + "pontos";
    if(fina == 2) document.getElementById("parabe").innerHTML = "parabens, vc gabaritou!!! :)             e eu so deveria deixar para mostrar os pontos no final, no começo para mim não fazia sentido, mas agora faz, e eu queria ter usado outro tipo de verificação da resposta certa, mas tava dando varios errinhos e perdi muito tempo corrigindo, então deixei assim mesmo. POREM EU NÃO QUERO CONTINUAR SENDO ASSIM vou descobrir oq estava dando errado e fazer melhor, não vou aceitar a mediocridade, tambem quero melhorar meus habitos para não passar a vergonha de deixar tudo apra a ultima hora, boa correção prof juju!";
}