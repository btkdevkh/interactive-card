const form = document.querySelector('[data-form="data-form"]')

const cardHolderName = document.querySelector('.card-holder-name')
const cardNumber = document.querySelector('.card-number')
const cardExpDateMonth = document.querySelector('.card-exp-date-month')
const cardExpDateYear = document.querySelector('.card-exp-date-year')
const cardCVC = document.querySelector('.card-cvc')

const cardHeader = document.querySelector('.card-header')
const aside = document.querySelector('.card-form-sidebar')
const card = document.querySelector('.card-header .container')

const cardHolderNameInput = document.querySelector('#card-holder-name')
const cardNumberInput = document.querySelector('#card-number')
const cardExpDateMonthInput = document.querySelector('#card-exp-date-month')
const cardExpDateYearInput = document.querySelector('#card-exp-date-year')

let fullName = ''
let cardNum = ''
let cardExpMonth = ''
let cardExpYear = ''

window.addEventListener('resize', (e) => {
  if(e.target.innerWidth >= 920) {
    card.remove()
    aside.append(card)
  } else {
    cardHeader.append(card)
  }
})

cardHolderNameInput.addEventListener('input', () => {
  cardHolderName.innerText = `${cardHolderNameInput.value}`
  fullName = cardHolderNameInput.value
})

cardNumberInput.addEventListener('input', () => {
  const reg = /^[\d]{16}$/

  if(!reg.test(cardNumberInput.value)) {
    cardNumberInput.classList.add('invalid')
  } else {
    cardNumberInput.classList.remove('invalid')
  }

  cardNumber.innerText = `${cardNumberInput.value}`
  cardNum = cardNumberInput.value
})

cardExpDateMonthInput.addEventListener('input', () => {
  console.log(123);
  const reg = /^[\d]{2}$/

  if(!reg.test(cardExpDateMonthInput.value)) {
    cardExpDateMonthInput.classList.add('invalid')
  } else {
    cardExpDateMonthInput.classList.remove('invalid')
  }

  cardExpDateMonth.innerText = `${cardExpDateMonthInput.value}/`
  cardExpMonth = cardExpDateMonthInput.value
})

cardExpDateYearInput.addEventListener('input', () => {
  const reg = /^[\d]{2}$/

  if(!reg.test(cardExpDateYearInput.value)) {
    cardExpDateYearInput.classList.add('invalid')
  } else {
    cardExpDateYearInput.classList.remove('invalid')
  }

  cardExpDateYear.innerText = `${cardExpDateYearInput.value}`
  cardExpYear = cardExpDateYearInput.value
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
})
