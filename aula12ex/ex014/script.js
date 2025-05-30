function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#d9b65e'
        var h = 'da manhã'
        
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#da7e38'
        var h = "da tarde"
       
    }else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#594669'
        var h = "da noite"
    }
    msg.innerHTML = `Agora são ${hora} horas  ${h}.`
}
