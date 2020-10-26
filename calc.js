/*window.onkeydown = function(event) {
    if (event.keyCode == 13) {
        document.getElementById('calcDisplay').innerHTML = 'hola';
    };
};

document.getElementById('igual').addEventListener("click", myFunction);

function myFunction() {
  document.getElementById('calcDisplay').innerHTML = '1';
}

const calculadora = document.querySelector('.calculadora')
const keys = calculadora.querySelector('.calcBotones')


const calculadora = document.querySelector(‘#calculadora’)
keys.addEventListener(‘click’, e => {
 if (e.target.matches(‘button’)) {
   // Do something
 }
})
const key = e.target
const action = key.dataset.action

if (!action) {
  console.log('number key!')
}

if (
  action === 'sumar' ||
  action === 'restar' ||
  action === 'multiplicar' ||
  action === 'dividir'
) {
  console.log('operator key!')
}

if (action === 'decimal') {
  console.log('decimal key!')
}

if (action === 'clear') {
  console.log('clear key!')
}

if (action === 'calcular') {
  console.log('equal key!')
}
*/

// Calculadora core
let operaciones = {
  sumar(...numeros) {
    return numeros.reduce(function(ant, sig) {
      return ant + sig
    })
  },
  restar(...numeros) {
    return numeros.reduce(function(ant, sig) {
      return ant - sig
    })
},
  multiplicar(...numeros) {
    return numeros.reduce(function (ant, sig) {
      return ant * sig
    })
    return this
  },
  dividir (...numeros) {
    return numeros.reduce(function (ant, sig) {
      return ant / sig
    })
  }
};
// Fin calculadora core

function calc() {
  let resultado = 0;
  function getResultado () {
    return resultado
  }
/*
  if (typeof operacion != 'function') {
    throw new Error ('El tercer parametro debe ser una funcion.')
  }
  return operacion(resultado, x)*/
  return {
    getResultado,
    ...operaciones
  }
}
let calcu = new calc()


console.log(calcu);
console.log(calcu.dividir(3,4,6))
console.log(calcu.getResultado());