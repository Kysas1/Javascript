function ver() {
    var texto1 = document.getElementById('txt1')
    var veri = document.getElementById('nac')
    if (texto1.value == 'Brasil') {
        veri.innerHTML = 'Nacionalidade : Voce é Brasileiro!'
    }
    else {
        veri.innerHTML = 'Nacionalidade : Voce é Estrangeiro'
    }
}
