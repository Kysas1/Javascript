var a = document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter' , entrou)
a.addEventListener('mouseout', saiu)
    function clicar() {
        a.innerText = 'clicou'
    }

    function entrou() {
        a.innerHTML = 'entrou'
        a.style.background = 'rgb(19, 97, 214)'
    }

    function saiu() {
        a.innerHTML = 'Saiu'
        a.style.background = 'rgb(248, 72, 72)'
    }