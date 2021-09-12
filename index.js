const inputFirst = document.getElementById('inputFirst')
const botaoEnviar = document.getElementById('botaoEnviar')

const aFazer = document.getElementById('aFazer')
const feito = document.getElementById('feito')

const input = (li) => {
  let input = document.createElement('input')
  input.setAttribute('type', 'checkbox')
  return input  
}

let isChecked = (input, li, alteracao, p) => {
  input.addEventListener('change', () => {
    if(input.checked){
      alteracao.remove()
     return feito.appendChild(li)
    }else {
      return aFazer.appendChild(li)
    }
    
  })
}

botaoEnviar.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(inputFirst.value)
  let li = document.createElement('li')


  let div1 = document.createElement('div')
  let alteracao = document.createElement('img')
  alteracao.setAttribute('src', './pen.png')

  let lixo = document.createElement('img')
  lixo.setAttribute('src','./trash.png')
  
    div1.appendChild(alteracao)
    div1.appendChild(lixo)

  let div2 = document.createElement('div')
  let input = document.createElement('input')
  input.setAttribute('type', 'checkbox')
  let p = document.createElement('p')
  
  div2.appendChild(input)
  p.textContent = inputFirst.value
  div2.appendChild(p)
  li.appendChild(div2)

  li.appendChild(div1)


  console.log(inputFirst.value)
  aFazer.appendChild(li)

  alteracao.addEventListener('click', () => {
    li.remove()
    inputFirst.value = p.textContent
    inputFirst.style.borderBlockStartColor = 'red'
    saveToDo()
    /*li.textContent = inputFirst.value*/
  })
  lixo.addEventListener('click', () => {
    li.remove()
    saveToDo()

 })
  isChecked(input,li, alteracao)
  saveToDo()

  function saveToDo() {
    const lis = aFazer.querySelectorAll('li')
    console.log(lis)
    const arrayLi = []

    for (let i of lis) {
      let textLi = i.textContent
      arrayLi.push(textLi)
    }

    const tarefasJSON = JSON.stringify(arrayLi)
    localStorage.setItem('i', tarefasJSON)
  }
  
})





