function alterarStatus(id){
    let jogo = document.getElementById(`game-${id}`);
    let botao = jogo.querySelector('.dashboard__item__button');
    let imagem = jogo.querySelector('.dashboard__item__img');
    let jogosAlugados = 0;

    function contarEExibirJogosAlugados(){
        console.log(`Total de jogos alugados: ${jogosAlugados}`);
    }

    if(imagem.classList.contains('dashboard__item__img--rented')){
        if(confirm(`Você tem certeza que deseja devolver o jogo?`)){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = `Alugar`;
        jogosAlugados --;
        }
    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = `Devolver`;  
        jogosAlugados++;     
    }
    contarEExibirJogosAlugados();

}
