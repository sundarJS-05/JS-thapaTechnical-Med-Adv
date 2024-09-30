
let btnElem = document.querySelector('#btn3')

// 2nd type: dom event 
btnElem.onclick = ()=>{
    alert('hello 3')
}

let btnElem2 = document.querySelector('#btn4')

// 3rd type: event listener event
btnElem2.addEventListener( 'click',  ()=>{
    alert('hello 3')

})


let keyInput = document.querySelector('#myInput')

let handleKeyPress= (event)=>{

    console.log(event.key)
    console.log(event.code)
    console.log(event.type)

        let keyPressSelection = document.querySelector('.keyPress')
    //    keyPressSelection.textContent=`Key pressed: ${event.key}`
        keyPressSelection.innerHTML=`Key pressed is: ${event.key}`
    
    let keyCodeSelection = document.querySelector('.keyCode')
        keyCodeSelection.innerHTML=`Key code is: ${event.code}`

        let charCodeSelection = document.querySelector('.charCode')
        charCodeSelection.innerHTML=`char code is: ${event.key.charCodeAt(0)}`
            
        let eTypeSelection = document.querySelector('.type')
        eTypeSelection.innerHTML=`event type is: ${event.type}`

}

keyInput.addEventListener('keydown', handleKeyPress)