function exibirNotas() {
    let inpValor = document.getElementById('inpValor')
    let outNotas100 = document.getElementById('outNotas100')
    let outNotas50 = document.getElementById('outNotas50')
    let outNotas10 = document.getElementById('outNotas10')

    outNotas100.textContent = ''
    outNotas50.textContent = ''
    outNotas10.textContent = ''

    let valor = Number(inpValor.value) 
    
    if (valor == '' || isNaN(valor)) {
        alert('Por favor, Informe o valor')
        inpValor.focus()
        return
    }

    if (valor % 10 != 0) {
        alert('Valor inválido para notas disponiveis (R$ 10, 50, 100)')
        inpValor.focus()
        return
    }

    let notas100 = valor / 100
    let resto = valor % 100
    let notas50 = resto / 50
    resto = resto % 50
    let notas10 = resto / 10
    
    if (notas100 > 0) {
        outNotas100.textContent = `Notas de 100 R$: ${Math.floor(notas100)}`
    }

    if (notas50 > 0) {
        outNotas50.textContent = `Notas de 50 R$: ${Math.floor(notas50)}`
    }

    if (notas10 > 0) {
        outNotas10.textContent = `Notas de 10 R$: ${Math.floor(notas10)}`
    }
}
let btnExibir = document.getElementById('btnExibir')
btnExibir.addEventListener('click',exibirNotas)