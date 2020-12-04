const bill = receipt()
    let delivery = 9000
    let name = 'Вы заказали'
for( const key in bill) {
    name += `${key} ${bill[key].info}, `
    delivery += bill[key].price
}

let finalBill = `${name}| Общая стоимость ${delivery} сумм с доставкой (9000)`
console.log(finalBill);