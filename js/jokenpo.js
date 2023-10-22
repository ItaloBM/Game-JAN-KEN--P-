function jogar(){ //Validação se uma das três opções foram marcadas ou não, caso contrário informará uma mensagem pedindo para fazer uma escolha
    if(document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false){
        alert("Selecione uma opção!!!");
    }
    else{
        var sorteio = Math.floor(Math.random() * 3);
        switch(sorteio){ //Sorteará três números alatórios e no qual cair vai apresentar a imagem referente ao número definido sorteado
            case 0:
                document.getElementById("pc").src="img/pcpedra.png";
                break;
            case 1:
                document.getElementById("pc").src="img/pcpapel.png";
                break;
            case 2:
                document.getElementById("pc").src="img/pctesoura.png";
                break;        
        }
        //Verificando o VENCEDOR ou declarando EMPATE
        //Alternativa onde o ocorreu empate
        if((document.getElementById("pedra").checked == true && sorteio == 0) || (document.getElementById("papel").checked == true && sorteio == 1)
        || (document.getElementById("tesoura").checked == true && sorteio == 2)){
            document.getElementById("placar").innerHTML="EMPATE";
        }
        //Alternativa onde o jogador venceu
        else if (document.getElementById("pedra").checked == true && sorteio == 2 || (document.getElementById("papel").checked == true && sorteio == 0)
        || (document.getElementById("tesoura").checked == true && sorteio == 1)){
            document.getElementById("placar").innerHTML="JOGADOR VENCEU!!!";
        }
        //Alternativa onde o computador venceu
        else {
            document.getElementById("placar").innerHTML="COMPUTADOR VENCEU!!!";
        }
    }   
}

function resetar(){
    document.getElementById("pc").src="img/pc.png";
    document.getElementById("placar").innerHTML="";
}