function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Richie', 'Juli', 'Arqui', 'Claudia']);
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
