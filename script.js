const ball = document.querySelector('img')
const question = document.querySelector('.question')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const answers = ['Nie wiem', 'Tak', 'Nie', 'To nie takie proste', 'Powiedz to jej', 'Tylko ciężka praca', 'Odpocznij!']

const addAnimaton = () => {
	ball.classList.add('shake-animation')
}
const removeAnimation = () => {
	ball.classList.remove('shake-animation')
}
const clearQuestion = () => {
	question.value = ''
}

const getAnswer = () => {
	const number = Math.floor(Math.random() * 7)
	answer.innerHTML = `<span>Odpowiedź: </span>${answers[number]}`
	clearQuestion()
}

const check = () => {
	answer.textContent = ''
	error.textContent = ''
	removeAnimation()
	const last = question.value.slice(-1)
	if (question.value === '') {
		error.textContent = 'Musisz zadać pytanie'
	} else if (last !== '?') {
		error.textContent = `Pytanie musi zakończyć się znakiem zapytania (?)`
	} else {
		getAnswer()
	}
}

const showAnswer = () => {
	addAnimaton()
	setTimeout(check, 1000)
}

ball.addEventListener('click', showAnswer)
