const calcularPrecioConDescuento = (precio, descuento) => {
    const porcentajePrecioConDescuento = calcularPorcentajePrecioConDescuento(descuento);
    const total = (precio * porcentajePrecioConDescuento) / 100;

    return total;
}

const calcularPorcentajePrecioConDescuento = descuento => {
    const porcentajePrecio = 100 - descuento;

    return porcentajePrecio;
}