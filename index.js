// declarar componentes
//    - ul que vai ser o pai para depois colocar as li
//    - input do form com seu botão
// CRIAR ELEMENTOS DE ACORDO COM O CLIQUE DO BUTÃO DO INPUT
//    - li que vai ser posta dentro do ul 
//    - criar input do tipo check, que vai transitar entre a fazer e feito, de acordo com o seu estado

let inputFirst = document.getElementById('inputFirst')
let botaoFirt = document.getElementById('botaoEnviar')
let ulFazer = document.getElementById('aFazer')
let ulFeito = document.getElementById('feito')

let alteracoes = function criarBotoes() {
  let alteracao = document.createElement('img')
  alteracao.setAttribute('src','./pen.png')
  alteracao.className = 'img'
  let lixo = document.createElement('img')
  lixo.setAttribute('src','./trash.png')
  lixo.className = 'img'

  let container = document.createElement('div')
  container.className = 'div'
  container.appendChild(alteracao)
  container.appendChild(lixo)
  return container
}



let criaLi = (e) => {
  let li = document.createElement('li')
  let input = document.createElement('input')
  let p = document.createElement('span')
  input.setAttribute('type', 'checkbox')
  p.innerHTML = e.target.value

  let container = document.createElement('div')
  container.appendChild(input)
  container.appendChild(p)
  li.appendChild(container)
  li.appendChild(alteracoes())
  

  isChecked(input, li)
  return li
}

let isChecked = (input, li) => {
  input.addEventListener('change', () => {
    if(input.checked){
     return ulFeito.appendChild(li)
    }else 
     return ulFazer.appendChild(li)
  })
}

inputFirst.addEventListener('change', (e) => {
  botaoFirt.addEventListener('click', (event)=>{
    event.preventDefault()
    console.log(e.target.value)
    let li = criaLi(e)
    ulFazer.appendChild(li)
    
    if(e.target.value === '') {
     return console.log(input.is(':checked'))
    }
  })
})


