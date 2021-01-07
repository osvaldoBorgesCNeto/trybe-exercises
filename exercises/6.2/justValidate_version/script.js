let estadosTodos = ['Acre', 'Alagoas', 'Amapa', 'Amazonas', 'Bahia', 'Ceara', 'Espirito Santo', 'Goias', 'Maranhao', 'Mato Grosso', 'Mato Grosso do Sul', 'Minhas Gerais', 'Para', 'Paraiba', 'Parana', 'Pernambuco', 'Piaui', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondonia', 'Roraima', 'Santa Catarina', 'Sao Paulo', 'Sergipe', 'Tocatins', 'Distrito Federal'];
let siglasTodas = ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to', 'df'];

function estados(nameEstado, siglas) {
	const father = document.querySelector('#input-state');
	const estado = document.createElement('option');
	estado.innerText = nameEstado;
	estado.value = siglas;
	father.appendChild(estado);
}

function loopEstado() {
	let estadoIndex = '';
	let siglaIndex = '';
	for (let index = 0; index < estadosTodos.length; index += 1) {
		estadoIndex = estadosTodos[index];
		siglaIndex = siglasTodas[index];
		estados(estadoIndex, siglaIndex);
	}
}

function clearAll() {
	const input = document.querySelectorAll('input');
	const textarea = document.querySelector('textarea');
	for (let index = 0; index < input.length; index += 1) {
		input[index].value = '';
		textarea.value = '';
	}
}

const buttonClear = document.querySelector('#button-clear')
buttonClear.addEventListener('click', clearAll)

new JustValidate('.js-form', {
    rules: {
      name: {
        required: true,
        minLength: 3,
        maxLength: 40
      },
      email: {
        required: true,
        email: true,
        maxLength: 50
      },
      cpf: {
        required: true,
        maxLength: 11
      },
      address: {
        required: true,
        maxLength: 200
      },
      city: {
        required: true,
        maxLength: 28
      },
      state: {
        required: true,
      },
      type: {
        required: true,
      },
      office: {
        required: true,
        maxLength: 40
      },
      descriptionOffice: {
        required: true,
        maxLength: 500
      },
      date: {
        required: true,
      }
    },
    messages: {
      name: {
        required: 'O campo de nome é obrigatório.',
      },
      email: {
        required: 'O campo de email é obrigatório.',
        email: 'O email digitado não é válido.',
      },
      cpf: {
        required: 'O campo de CPF é obrigatório.',
      },
      address: {
        required: 'O campo endereço é obrigatório.',
      },
      city: {
        required: 'O campo cidade é obrigatório.',
      },
      state: {
        required: 'O campo estado é obrigatório.',
      },
      type: {
        required: 'A escolha de um item é obrigatória.',
      },
      office: {
        required: 'Este campo é obrigatório.',
      },
      descriptionOffice: {
        required: 'Este campo é obrigatório.',
      },
      date: {
        required: 'Este campo é obrigatório.',
      }
    },
    submitHandler: function (form, values) {
      console.log(form, values);
    }});

window.onload = function() {
	loopEstado();
}