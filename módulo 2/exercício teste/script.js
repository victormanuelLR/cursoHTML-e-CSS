let quadrado = document.querySelector('button.quadrado')
quadrado.addEventListener('mouseenter',  entrou)
quadrado.addEventListener('click', corMudar)
quadrado.addEventListener('mouseout', saiu)
cont = 0
function saiu () {
    quadrado.style.color = '#386B66'
}
function entrou () {
    quadrado.style.color = '#88c8c1'
}
function corMudar () {
    cont += 1
    switch (cont) {
    case 1:
        quadrado.style.background = '#EBD0B7'
        break
    case 2:
        quadrado.style.background = 'rgba(184, 235, 230, 1)'
        cont = 0
        break
    }

}