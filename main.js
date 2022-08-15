const form = document.querySelector('#form')
const cardComplete = document.querySelector('#card-complete')
const cardHolderName = document.querySelector('.card-holder-name')
const cardNumber = document.querySelector('.card-number')
const cardExpDateMonth = document.querySelector('.card-exp-date-month')
const cardExpDateYear = document.querySelector('.card-exp-date-year')
const cardCVC = document.querySelector('.card-cvc')

const cardHolderNameInput = document.querySelector('#card-holder-name')
const cardNumberInput = document.querySelector('#card-number')
const cardExpDateMonthInput = document.querySelector('#card-exp-date-month')
const cardExpDateYearInput = document.querySelector('#card-exp-date-year')
const cardCVCInput = document.querySelector('#card-cvc')

const cardHeader = document.querySelector('.card-header')
const aside = document.querySelector('.card-form-sidebar')
const card = document.querySelector('.card-header .container')

// States
let fullName = ''
let cardNum = ''
let cardExpMonth = ''
let cardExpYear = ''
let cardCVCNum = ''

// Stuffs with Media Queries
window.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia("(min-width: 920px)").matches) {
    aside.append(card)
  } else {
    cardHeader.append(card)
  }
})
window.addEventListener('resize', (e) => {
  if(e.target.innerWidth >= 920) {
    aside.append(card)
  } else {
    cardHeader.append(card)
  }
})

// Inputs
cardHolderNameInput.addEventListener('input', () => {
  cardHolderName.innerText = `${cardHolderNameInput.value}`
  fullName = cardHolderNameInput.value
})

cardNumberInput.addEventListener('input', () => {
  const reg = /^([\d\ ]{5}){3}([\d]{4})$/

  if(!reg.test(cardNumberInput.value)) {
    cardNumberInput.classList.add('invalid')
  } else {
    cardNumberInput.classList.remove('invalid')
  }

  cardNumber.innerText = `${cardNumberInput.value}`
  cardNum = cardNumberInput.value
})

cardExpDateMonthInput.addEventListener('input', () => {
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

cardCVCInput.addEventListener('input', () => {
  const reg = /^[\d]{3}$/

  if(!reg.test(cardCVCInput.value)) {
    cardCVCInput.classList.add('invalid')
  } else {
    cardCVCInput.classList.remove('invalid')
  }

  cardCVC.innerText = `${cardCVCInput.value}`
  cardCVCNum = cardCVCInput.value
})

// Submit
form.addEventListener('submit', (e) => {
  e.preventDefault()

  if(!fullName || !cardNum || !cardExpDateMonth || !cardExpDateYear || !cardCVCNum) {
    return
  }

  const card = {
    fullName: fullName.trim(),
    cardNum: cardNum.replace(/\s/g, ''),
    cardExpMonth: cardExpMonth.trim(),
    cardExpYear: cardExpYear.trim(),
    cardCVCNum: cardCVCNum.trim()
  }
  // console.log(card);

  cardComplete.classList.add('active')
  form.classList.add('active')
})
