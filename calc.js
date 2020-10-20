window.onkeydown = function(event) {
    if (event.keyCode == 13) {
        document.getElementById('calcDisplay').innerHTML = 'hola';
    };
};

button.onclick = function(){
    document.getElementById('calcDisplay').innerHTML = 'chau';
};

const calculadora = document.querySelector('.calculadora')
const keys = calculadora.querySelector('.calcBotones')


/*const calculadora = document.querySelector(‘#calculadora’)
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
function suma (numero1, numero2) {
    return numero1 + numero2;
}
function resta (numero1, numero2) {
    return numero1 - numero2;
}
function multiplicacion (numero1, numero2) {
    return numero1 * numero2;
}
function division (numero1, numero2) {
    return numero1 / numero2;
}

function calculadora (numero1, numero2, callback) {
    return callback(numero1, numero2);
}
calculadora (4, 3, division)

// Fin calculadora core