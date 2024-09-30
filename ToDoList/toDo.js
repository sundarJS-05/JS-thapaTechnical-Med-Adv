
let mainToDoElem = document.querySelector('.toDoElem')

let inputValue = document.querySelector('#inputValue')

let button = document.querySelector('.btn')

let addToDoList = (event)=>{

    event.preventDefault()

    let newDiv = document.createElement('div')

    newDiv.classList.add('mainToDoDiv')

    newDiv.innerHTML=`<li> ${inputValue.value}</li> <button class='deleteBtn'> </button>`

    mainToDoElem.appendChild(newDiv)

}

button.addEventListener( 'click', (event)=>{
    addToDoList(event)
})