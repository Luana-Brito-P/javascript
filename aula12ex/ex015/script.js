function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    //TESTE DE FUNCIONAMENTO

    if (fano.value.length == 0 || fano.value > ano){ //comprimento do valor -> fano.value.length
    window.alert('[ERROR] verifique os dados e tente novamente!')

    //TESTE VALIDADO E FUNCIONAL

    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gên = ''
        // <img id = 'foto' em js: >
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        //ANALISANDO O SEXO

        if(fsex[0].checked) {
            gên = 'Homem'

            //ANALISANDO IDADE

            //HOMEM
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'imagens/criançam.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovemm.png')
            } else if (idade < 60) {
                //Adulto
                 img.setAttribute('src', 'imagens/adultom.png')
            } else {
                //idoso
                 img.setAttribute('src', 'imagens/idosom.png')
            }
        //MULHER
        }else if(fsex[1].checked) {
            gên = 'Mulher'

            //ANALISANDO IDADE 02

            if (idade >= 0 && idade <= 10) {
                //criança
                 img.setAttribute('src', 'imagens/criançaf.png')
            } else if (idade < 21) {
                //jovem
                 img.setAttribute('src', 'imagens/jovemf.png')
            } else if (idade < 60) {
                //Adulto
                 img.setAttribute('src', 'imagens/adultaf.png')
            } else {
                //idoso
                 img.setAttribute('src', 'imagens/idosaf.png')
            }
        }

        //RESULTADO

        res.style.textAlign ="center"
        res.innerHTML = `Detectamos ${gên} com ${idade} anos.`
        res.appendChild(img) //adicionando a imagem
    }
        
}

/* RESUMO ESTRUTURA DAS CONDIÇÕES
    [TESTE DE FUNCIONAMENTO]
        ERROR
        FUNCIONAL
            [TESTE DO SEXO]
                HOMEM
                    [TESTE IDADE]
                        CRIANÇA
                        JOVEM
                        ADULTO
                        IDOSO

                MULHER
                    [TESTE IDADE]
                        CRIANÇA
                        JOVEM
                        ADULTO
                        IDOSO

*/