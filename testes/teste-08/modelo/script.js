
function verificar() {
var país = document.querySelector('#dpais')
var res = document.querySelector('#res')
var val = país.value 
    var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    if (val == 'Brasil') {
        img.setAttribute('src', 'brasil.png')
    } else if (val == 'França') {
        img.setAttribute('src', 'frança.png')
    } else if (val == 'Itália') {
        img.setAttribute('src', 'italia.png')
    } else if (val == 'Espanha') {
        img.setAttribute('src', 'espanha.png')
    } else if (val == 'Irã'){
        img.setAttribute('src', 'b.png')
    }
    else {
       val != 'Brasil' || 'França' || 'Itália' || 'Espanha' || 'Irã' 
       alert(`[ERRO] O país que você escolheu não está na  lista!!!`)
    }

    res.innerHTML = `<p>Você vive no(a) ${val}</p> `
    res.appendChild(img)
}
