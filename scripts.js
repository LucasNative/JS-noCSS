var a = '#ff6800'
var b = '#c40013'
var c = '#e500ac'
var d = '#00fb90'

const title = document.querySelector('h1')
const button = document.querySelector('h2')
const body = document.querySelector('body')
const paragraph = document.querySelector('p')

body.style.backgroundColor = '#313131'
body.style.fontFamily = 'Ubuntu'

title.textContent = ('Essa pagina não tem arquivo CSS')
title.style.color = '#ff00a5'
title.style.width = '900px'
title.style.textAlign = 'center'
title.style.margin = 'auto'
title.style.marginTop = '15vh'
title.style.fontSize = '50px'

button.textContent = ('Chega mais, clica em mim')
button.style.backgroundColor = a
button.style.borderRadius = '15px'
button.style.padding = '25px'
button.style.color = '#5800c4'
button.style.width = '200px'
button.style.textAlign = 'center'
button.style.margin = 'auto'
button.style.marginTop = '20vh'
button.style.transition = '150ms ease 50ms'
button.style.cursor = 'pointer'
button.style.fontSize = '30px'


paragraph.textContent = ('Mas tem JavaScript!!!')
paragraph.style.color = '#fffc00'
paragraph.style.width = '900px'
paragraph.style.textAlign = 'center'
paragraph.style.margin = 'auto'
paragraph.style.marginTop = '15vh'
paragraph.style.fontSize = '50px'

button.addEventListener('mouseenter', entrar)
button.addEventListener('click', clicar)
button.addEventListener('mouseout', sair)

function entrar() {
    button.textContent = ('Vamos lá, pode clicar')
    button.style.backgroundColor = c
    button.style.borderRadius = '15px'
    button.style.padding = '25px'
    button.style.color = '#e5d100'

}

function sair() {
    button.textContent = ('Pode clicar denovo')
    button.style.backgroundColor = b
    button.style.borderRadius = '15px'
    button.style.padding = '25px'
    button.style.color = '#a1ff94'
}

function clicar() {
    button.textContent = ('Obrigado por clicar!')
    button.style.backgroundColor = d
    button.style.borderRadius = '15px'
    button.style.padding = '25px'
    button.style.color = '#5500d4'
}

