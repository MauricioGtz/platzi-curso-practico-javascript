const conseguirModaLista = lista => {
    const listaObj = {};

    lista.map(element => {
        listaObj[element] ? listaObj[element] += 1 : listaObj[element] = 1;;
    });

    console.log(lista);

    const listaArr = Object.entries(listaObj).sort((firstElem, secondElem) => firstElem[1] - secondElem[1]);

    return listaArr[listaArr.length - 1];
};