
    
    function somar() {
        var n1 = document.getElementById('txtn1')
        var n2 = document.getElementById('txtn2')
        var num1 =Number(n1.value)
        var num2 = Number(n2.value)
        var s = num1 + num2
        var resul = document.getElementById('resultado')
        resul.innerHTML = `A soma entre o numero ${num1} e o numero ${num2} é ` + s
    }