export function calculateSoldQuantity(item, defaultOffset = 20) {
    // Si sold_quantity está definido, úsalo. De lo contrario, calcula la cantidad vendida,
    // asegurándote de que no sea menor que 0.
    const soldQuantity = item.sold_quantity !== undefined
        ? item.sold_quantity
        : Math.max(0, item.initial_quantity - defaultOffset);

    return soldQuantity;
}