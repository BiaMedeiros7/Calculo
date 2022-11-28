function contar() {
    var inicio = document.getElementById('num')
    var fim = document.getElementById('num1')
    var passo = document.getElementById('num2')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO! Faltam dados.') 
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if ( i < f ) {
            // crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{27A1}`
            }

        } else {
            // refressivo
            for(var c = i; c >= f; c-= p) {
                res.innerHTML +=  `${c} \u{27A1}`
            }
        }

        
        }

        

    }


