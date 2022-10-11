// Declare and assign
var lastName = "Castro"
// Re assing
lastName = "Quintero"
console.log(lastName)
// The Console log Output is Quintero
// Because var is reassigned scope 


let fruit = 'Apple';
fruit = "Kiwi";
console.log(fruit)
//The Output is Kiwi

const animal = "Dog"
animal = "Cat";
console.log(animal)
//Output is TypeError: Assignment to constant variable.


const fruits = () => {
    if(true){
        var fruit1 = "Apple"; // function scope
        let fruit2 = "Kiwi";  // block scope
        const fruit3 = "Banana"; // block scope 
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit12);
}

fruits();
// Output  1 Apple 
// Output2 ReferenceError: fruit2 is not defined