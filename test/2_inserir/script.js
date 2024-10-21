    let listaCores = ['yellow' , 'blue' , 'red' , 'gray' , 'green'];
    document.body.style.backgroundColor = listaCores[2]; 

    function trocarCores() {
        document.body.style.backgroundColor = listaCores[Math.floor(5*Math.random())];    
}
    setInterval(trocarCores ,1000 )