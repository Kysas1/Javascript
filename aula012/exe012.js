var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)

if (hora <=12 ) {
    console.log('Está de manhã , bom dia')
} else if ( hora <= 18) {
    console.log('Está de tarde, boa tarde')
} else if ( hora > 19 ) {
    console.log (' Está de noite , boa noite')
} else if ( hora < 6) {
    console.log('Boa Madrugada')
}
    