const mitadLista = lista => parseInt(lista.length / 2);

const esPar = lista => {
    return lista % 2 === 0;
}

const calcularMediana = lista => {
    lista.sort((firstNum, secondNum) => firstNum - secondNum);

    if (esPar(lista.length)) {
        const num1 = lista[mitadLista(lista) - 1];
        const num2 = lista[mitadLista(lista)];

        return calcularPromedio([num1, num2]);
    } else {
        return lista[mitadLista(lista)];
    }
}