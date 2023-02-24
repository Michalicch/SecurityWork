const authBtn = document.getElementById('open-auth-btn')
const modal = document.getElementById('auth-modal')
const closeBtns = document.querySelectorAll('.btn-close')
const loginBtn = document.querySelector('.login__btn')
const logoutBtn = document.getElementById('close-auth-btn')



const openModal = () => {
	setTimeout(() => {
		modal.classList.add('show')
	}, 100)
}

const closeModal = () => {
	setTimeout(() => {
		modal.classList.remove('show')
	}, 300)
}

const login = () => {
	authBtn.classList.add('visually-hidden')
	logoutBtn.classList.remove('visually-hidden')
	closeModal()
}
const logout = () => {
	authBtn.classList.remove('visually-hidden')
	logoutBtn.classList.add('visually-hidden')
}

const checkAuth = () => {
	if(JSON.parse(localStorage.getItem('auth'))) {
		login()
	}
}

authBtn.addEventListener('click', openModal);

closeBtns.forEach((btn) => {
	btn.addEventListener('click', closeModal)
});

loginBtn.addEventListener('click', () => {
	const loginInput = modal.querySelector('#login-control')
	const passwordInput = modal.querySelector('#password-control')

	const admin = {
		login: loginInput.value,
		password: passwordInput.value
	}

	localStorage.setItem('auth', JSON.stringify(admin))
	login()
})

logoutBtn.addEventListener('click', () => {
	localStorage.removeItem('auth')
	logout()
})

checkAuth()