export const courier = (weight) => {
    let charge = 0;
    if (weight > 0 && weight <= 200) {
        charge = 5
    } else if (weight > 200 && weight <= 500) {
        charge = 10
    } else if (weight > 500 && weight <= 1000) {
        charge = 15
    } else if (weight > 1000 && weight <= 5000) {
        charge = 20
    }
    return charge
}