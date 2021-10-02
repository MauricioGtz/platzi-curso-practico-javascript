const calcularTotal = numList => {
    return numList.reduce((total = 0, newNum) => {
        return parseInt(total) + parseInt(newNum);
    });
}

const calcularPromedio = numList => {
    if (typeof numList !== 'array' && typeof numList !== 'object') {
        console.log('Error, debe de ser lista de números: 1, 2, 3, 4, 5');
        return;
    }

    return calcularTotal(numList) / numList.length;
};