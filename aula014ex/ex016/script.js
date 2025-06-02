function contar() {
   let ini = document.getElementById('txti').value
   let fim = document.getElementById('txtf').value
   let passo = document.getElementById('txtp').value
   let res = document.getElementById('res')

   if(passo == 0){
    window.alert('Passo Inválido! O passo deve ser no mínimo 1')
   } else {
        if (ini.length == 0 || fim.length == 0 || passo.length == 0) {
            res.innerHTML = 'Impossível contar!'
            //window.alert('[ERROR] Faltam dados!')
    } else {
            res.innerHTML = 'Contando: <br>'
            let i = Number(ini)
            let f = Number(fim)
            let p = Number(passo)
            
            if(i < f) {
            //Contagem Crescente
                for (let c = i; c <= f; c+= p) {
                    res.innerHTML += `${c} \u{1F449}`
            }
            } else {
            //Contagem Regressiva
                for (let c = i; c >= f; c -= p) {
                    res.innerHTML += `${c} \u{1F449}`
                }
            }
            res.innerHTML += `\u{1F3C1}`
    }
   }
  
}

/*
EXPLICANDO

1) adicionamos as variaveis ini, fime passo
2) fizemos um teste de dados com if (se o comprimento for igual a zero [ERROR] se não realizar contagem)
3) no else começamos a contagem, adicionamos as variveis em forma numerica para cada valor
4) adicionamos uma repetição
    4a) adicionamos um contador que recebe o valor de inicio
    4b) funcionara enquanto o contador/inicio menor que fim
    4c) o contador vai receber ele mesmo mais o passo (c = c + passo)
    ** eu tinha montado uma lógica semalhente, mas ficou faltando converter os valores para um número, um contador, e o passo no final ta errado :
     for(inicio; inicio <= fim; passo++)
     ou seja estudar para melhorar a prática e a lógica com repetições
5) adicionando o emoji de bandeira ao final do código
6) a contagem funciona para o fim maior que o inicio mas ao contrario nao, para isso, foi criado um if para a divisão dessas tarefas:
    if(i>f){codigo1} else{codigo2}
7) Resolvendo o problema do passo caso ele seja 0 com if e else, caso ele seja diferente de 0, o código deve ser realizado(movi o código pra dentro do else) 

ESTRUTURA =
 1- variaveis
 2-Teste de comprimento de caracteres
 3-Teste de passo
 4-Realização da contagem 
*/