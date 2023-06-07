function carregar() {
    var mensagem = window.document.querySelector('#msg')
    var img = window.document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        // BOM DIA!
        img.src = 'manha.png.png'
        document.body.style.background = '#bfa220'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'tarde.png.png'
        document.body.style.background = '#f58a05'
    } else {
        // BOA NOITE!
        img.src = 'noite.png.png'
        document.body.style.background = '#002860'
    }
}

