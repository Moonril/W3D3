
const pageForm = document.getElementById('new-list-form')

pageForm.addEventListener('submit', (e) => {

    e.preventDefault()

    const addItemInput = document.getElementById('add-item')

    const newItemValue = {
        newItem: addItemInput.value
    }

    // create new element
    const shoppingDiv = document.createElement('div')
    
    shoppingDiv.classList.add('shopping-div')
    
    shoppingDiv.innerHTML = `
    <li id='check-me'>${newItemValue.newItem}</li>
    <button class='check-button' onclick='checkItem(event)'>&#10004;</button>
    <button class='delete-button' onclick='deleteItem(event)'>X</button>
    `
    //appen child
    const ulList = document.getElementById('ul-list')
    ulList.appendChild(shoppingDiv)

    //empty the form
    addItemInput.value = ''




})

// deve creare un div contentente:
// deve creare un 'li' contenente il value dell'input
// deve avere un tasto delete
// deve avere un tasto complete che sbarra il testo del 'p' 


// make the buttons usable

// check button

const checkItem = function(e) {

    const pressedButton = e.target

    const itemToCheck = document.getElementById('check-me')
    console.log(pressedButton)

    itemToCheck.style.textDecoration = 'line-through'

}

//delete button

const deleteItem = function(e) {
    console.log('elimina', e.target.parentElement)

    const pressedButton = e.target
    const itemToRemove = pressedButton.parentElement
    itemToRemove.remove()
}