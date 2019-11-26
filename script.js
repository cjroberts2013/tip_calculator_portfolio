const button = document.querySelector('button')
const cost = document.querySelector('input')
const results5 = document.querySelector('.tip__amount--0')
const results10 = document.querySelector('.tip__amount--1')
const results15 = document.querySelector('.tip__amount--2')
const results20 = document.querySelector('.tip__amount--3')
const results25 = document.querySelector('.tip__amount--4')
const results30 = document.querySelector('.tip__amount--5')

console.log(button)

button.addEventListener('click', function() {
  console.log('This button work')
  results5.innerHTML = `$${(cost.value * 0.05).toFixed(2)}`
  results10.innerHTML = `$${(cost.value * 0.1).toFixed(2)}`
  results15.innerHTML = `$${(cost.value * 0.15).toFixed(2)}`
  results20.innerHTML = `$${(cost.value * 0.2).toFixed(2)}`
  results25.innerHTML = `$${(cost.value * 0.25).toFixed(2)}`
  results30.innerHTML = `$${(cost.value * 0.3).toFixed(2)}`
})
