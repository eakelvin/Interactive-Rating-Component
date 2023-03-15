const one = document.getElementById('button1')
const two = document.getElementById('button2')
const three = document.getElementById('button3')
const four = document.getElementById('button4')
const five = document.getElementById('button5')

const submit = document.querySelector('.sub')
const container = document.querySelector('.container1')
const selection = document.querySelector('.selection')

one.addEventListener("click", function () {
    one.style.backgroundColor = 'hsl(217, 12%, 63%)'
    selection.textContent = 'You selected 1 out of 5'
})
two.addEventListener("click", function () {
    two.style.backgroundColor = 'hsl(217, 12%, 63%)'
    selection.textContent = 'You selected 2 out of 5'
})
three.addEventListener("click", function () {
    three.style.backgroundColor = 'hsl(217, 12%, 63%)'
    selection.textContent = 'You selected 3 out of 5'
})
four.addEventListener("click", function () {
    four.style.backgroundColor = 'hsl(216, 12%, 54%)'
    selection.textContent = 'You selected 4 out of 5'
})
five.addEventListener("click", function () {
    five.style.backgroundColor = 'green'
    selection.textContent = 'You selected 5 out of 5'
})


submit.addEventListener("click", function() {
    container.classList.remove('hidden')
 })

        


   
