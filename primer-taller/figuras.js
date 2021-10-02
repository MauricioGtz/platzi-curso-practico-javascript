console.group('Cuadrados');

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimetroCuadrado = (lado = ladoCuadrado) => lado * 4;
console.log(`El perimetro cuadrado es: ${perimetroCuadrado()}cm^2`);

const areaCuadrado = (lado = ladoCuadrado) => lado * lado;
console.log(`El area del cuadrado es: ${areaCuadrado()}cm^2`);

console.groupEnd();

console.group('Triangulos');
const ladoTriangulo1 = 6,
      ladoTriangulo2 = 6,
      baseTriangulo = 4,
      alturaTriangulo_1 = 5.5;

console.log(
    `Los lados del triangulo miden: ${ladoTriangulo1}cm,
     ${ladoTriangulo2}cm,
     ${baseTriangulo}cm
     y tiene una altura de ${alturaTriangulo_1}cm`
);

const perimetroTriangulo = (lado1 = ladoTriangulo1, lado2 = ladoTriangulo2, base = baseTriangulo) => lado1 + lado2 + base;
console.log(`Perimetro del triangulo es de: ${perimetroTriangulo()}`);

const areaTriangulo = (base = baseTriangulo, altura = alturaTriangulo_1) => (base * altura) / 2;
console.log(`Perimetro del triangulo es de: ${areaTriangulo()} cm^2`);

console.groupEnd();

console.group('Circulos');

// Radio
const radioCirculo = 4;
console.log(`El radio del circulo es de ${radioCirculo}cm`);

// Diámetro
const diametroCirculo = (radio = radioCirculo) => radio * 2;
console.log(`El diametro del circulo es de ${diametroCirculo()}cm`);

// PI
const PI = Math.PI;
console.log(`PI es igual a: ${PI}`);

// Circunferencia
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;

console.log(`El perimetro del circulo es de ${perimetroCirculo()}cm`);

// Area
const areaCirculo = (radio = radioCirculo) => (radio * radio) * PI;

console.log(`El area del circulo es de ${areaCirculo()}^2`);

console.groupEnd();

// Calcular cuadrados
function calcularPerimetroCuadrado() {
    const input = document.getElementById('cuadrado-lados');

    document.getElementById('cuadrado-resultado').innerHTML = perimetroCuadrado(input.value);
}

function calcularAreaCuadrado() {
    const input = document.getElementById('cuadrado-lados');

    document.getElementById('cuadrado-resultado').innerHTML = areaCuadrado(input.value);
}

// Calcular triangulos
function calcularPerimetroTriangulo() {
    const inputLadoA = document.getElementById('triangulo-lado-a');
    const inputLadoB = document.getElementById('triangulo-lado-b');
    const inputBase = document.getElementById('triangulo-base');

    document.getElementById('triangulo-resultado').innerHTML = perimetroTriangulo(inputLadoA.value, inputLadoB.value, inputBase.value);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById('triangulo-base');
    const inputAltura = document.getElementById('triangulo-altura');

    document.getElementById('triangulo-resultado').innerHTML = areaTriangulo(inputBase.value, inputAltura.value);
}

// Calcular circulos
function calcularPerimetroCirculo() {
    const input = document.getElementById('circulo-radio');

    document.getElementById('circulo-resultado').innerHTML = perimetroCirculo(input.value);
}

function calcularAreaCirculo() {
    const input = document.getElementById('circulo-radio');

    document.getElementById('circulo-resultado').innerHTML = areaCirculo(input.value);
}

const alturaTriangulo = (ladoA, ladoB, base) => {
    if ( ladoA !== ladoB ) {
        console.log('No es un triangulo isosceles, lado A y lado B no son iguales');
        return;
    }

    const altura = (ladoA * ladoB) - ((base * base) / 4);

    return Math.sqrt(altura);
};