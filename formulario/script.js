const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nom: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
	nom: false,
	prenom: false,
	email: false,
	mdp: false
}

const validarFormulario = (e) => {
	switch(e.target.name){
		case "nom":
			validarCampo(expresiones.nom, e.target, 'apellido')
		break;
		case "prenom":
			validarCampo(expresiones.nom, e.target, 'nombre')
		break;
		case "email":
			validarCampo(expresiones.mail, e.target, 'email')
		break;
		case "mdp":
			validarCampo(expresiones.password, e.target, 'mdp')
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('form-group-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('form-group-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .form-input-error`).classList.remove('form-input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('form-group-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('form-group-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .form-input-error`).classList.add('form-input-error-activo');
		campos[campo] = false;

	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault(); // NO ENVIA NADA

	//const cg = document.getElementById('cg')
	if(campos.nom){
		formulario.reset();
	}
});