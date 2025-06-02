function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por Favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}

/*
ESTRUTURA
1- variaveis
2- teste de comprimento de caractere
3- conersão para numero
4- resetar a tabela antes
5- fazer a tabela com repetição

*/