function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else { 
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value) 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var gênero =''  
        if (fsex [0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menino.png')
                // Criança
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-m.png')
                // jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'homem.png')
                // Adulto
            } else {
                img.setAttribute('src', 'idoso.png')
                // Idoso
            } 
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menina.png')
                // Criança
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-f.png')
                // jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher.png')
                // Adulto
            } else {
                img.setAttribute('src', 'idosa.png')
                // Idoso
            } 
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com 
        ${idade} anos.`
        res.appendChild(img)
        
    }
}