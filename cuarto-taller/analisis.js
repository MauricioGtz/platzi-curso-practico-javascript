// Salary list
const salariosMex = mexico.map(person => person.salary);

//  Sort salary list
const salariosMexSorted = salariosMex.sort((salaryA, salaryB) => salaryA - salaryB);

// Calculate salary median
const medianaSalarios = lista => calcularMediana(lista);

// Salary median general
const medianaSalariosGeneral = medianaSalarios(salariosMexSorted);

// Top 10%
const spliceStart = (salariosMexSorted.length * 90) / 100;
const spliceCount = salariosMexSorted.length - spliceStart;

const salariosMexTop10 = salariosMexSorted.splice(spliceStart, spliceCount);
const medianaMexTop10 = medianaSalarios(salariosMexTop10);