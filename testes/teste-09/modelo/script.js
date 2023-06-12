function contar () {
var primeiroNumero = window.document.querySelector('#inic')
var fim = window.document.querySelector('#ifim')
var passo = window.document.querySelector('#ipass')
var res = window.document.querySelector('#res')

if(primeiroNumero.value.length == 0  || fim.value.length == 0 || passo.value.length == 0 ) {
   res.innerHTML = 'Impossível contar!'
} else {
  res.innerHTML = 'Contando: <br>'
  var ini = Number(primeiroNumero.value)
  var f = Number(fim.value)
  var p = Number(passo.value)
  if (p <= 0) {
    alert('Passo inválido! Considerando PASSO 1')
    p = 1
  }

  if (ini < f) {

  for (var c = ini; c <= f; c += p ) {
    res.innerHTML += `${c} \u{1F449}`
  }

   
} else {
    for (var c = ini; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`
    } 
}
}
res.innerHTML += `\u{1F3C1}`


} 
     








