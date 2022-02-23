const form = document.getElementById('bestall')
const name = document.getElementById('name')
const telefon = document.getElementById('telefon')
const email = document.getElementById('email')
const adress1 = document.getElementById('address1')
const postnr = document.getElementById('postnr')
bestall.addEventListener('submit', e => {
	e.preventDefault
	validateInputs();

});
const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success')
}
const setSuccess = (element, message) => {
	const inputControl = element.parentElement;
	errorDisplay.innerText = '';
	inputControl.classList.add('success');
}
const isValid = email =>{
	const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLocaleLowerCase());
}
const validateInputs = () => {
	const name = name.value.trim();
	const telefon = name.value.trim();
	const email = name.value.trim();
	const adress1 = name.value.trim();
	const postnr = name.value.trim();

	if (nameValue === ''){
		setError(name, 'name is required');

	}else{
		setSuccess(name)
	}
	if (emailValue === ''){
		setError(email, 'Email is required');
	}
};
