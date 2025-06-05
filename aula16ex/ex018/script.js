let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){ // indexOf procura na variável composta, -1 é pq n foi encontrado
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option') // criando o elemento option
        item.text = `Valor ${num.value} adicionado.` // adicionando texto
        lista.appendChild(item) // adicionando as configurações no local
        res.innerHTML = '' //limpar o res dps de adicionar mais option
    } else {
        alert('Valor inválido ou jé encontrado na lista')
    }
    // Apagar o texto dps q escreveu e adicionou
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length // qnts nummeros?
        let maior = valores[0] //maioe
        let menor = valores[0] //menor

        let soma = 0
        let media = 0
        for(let pos in valores) {
        //Soma
            soma += valores[pos]
        // Analisar cada variavel para saber qual é maior e menor
            if (valores[pos] > maior) {
                maior = valores[pos]
            } if (valores[pos] < menor){
                menor = valores[pos]
            }
       
            
        }
        //média
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.<p/>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.<p/>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}