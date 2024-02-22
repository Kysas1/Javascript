function calcular() {
    var txtv = document.getElementById('txtvel')
    var res = document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>A sua velocidade atual é de <strong> ${vel}KMH</strong></p>`
    if (vel > 60 ) {
        res.innerHTML += "Voce <strong>ultrapassou</strong> o limite de velocidade de 60KMH , Multado !"
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`
}