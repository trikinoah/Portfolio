/*Skills*/

let tabs = document.querySelectorAll('.tabs-toggle'),
	contents = document.querySelectorAll('.tabs-content');

tabs.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		contents.forEach((content) => {
			content.classList.remove('is-active');
		});
		tabs.forEach((tab) => {
			tab.classList.remove('is-active');
		});

		contents[index].classList.add('is-active');
		tabs[index].classList.add('is-active');
	});
});




/* CONTACT */

const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresions = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	passwd: /^.{4,12}$/, // 4 a 12 digitos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const fields = {
	surname: false,
	name: false,
	email: false,
	passwd: false
}

const validateForm = (e) => {
	switch(e.target.name){
		case "surname":
			validateField(expresions.name, e.target, 'surname')
		break;
		case "name":
			validateField(expresions.name, e.target, 'name')
		break;
		case "email":
			validateField(expresions.mail, e.target, 'email')
		break;
		case "passwd":
			validateField(expresions.passwd, e.target, 'passwd')
		break;
	}
}

const validateField = (expresion, input, field) => {
	if (expresion.test(input.value)){
		document.getElementById(`group-${field}`).classList.remove('form-group-incorrect');
		document.getElementById(`group-${field}`).classList.add('form-group-correct');
		document.querySelector(`#group-${field} i`).classList.add('fa-check-circle');
		document.querySelector(`#group-${field} i`).classList.remove('fa-times-circle');
		document.querySelector(`#group-${field} .form-input-error`).classList.remove('form-input-error-active');
		fields[field] = true;
	} else {
		document.getElementById(`group-${field}`).classList.add('form-group-incorrect');
		document.getElementById(`group-${field}`).classList.remove('form-group-correct');
		document.querySelector(`#group-${field} i`).classList.add('fa-times-circle');
		document.querySelector(`#group-${field} i`).classList.remove('fa-check-circle');
		document.querySelector(`#group-${field} .form-input-error`).classList.add('form-input-error-active');
		fields[field] = false;

	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validateForm);
	input.addEventListener('blur', validateForm);
});

form.addEventListener('submit', (e) => {
	e.preventDefault(); // ENVOI RIEN

	//const cg = document.getElementById('cg')
	if(fields.name){
		form.reset();
	}
});

// FORMULAIRE POP UP

function toggle(){
	var blur = document.getElementById('blur');
	blur.classList.toggle('active');
	var popup = document.getElementById('popup');
	popup.classList.toggle('active');
	
}