// Global Scope

var firstName = "Richie"

// Local Scope 

function fullName(){
    var lastName = " Castro";
    return firstName + "" + lastName;
}

console.log(fullName());
console.log("nombre en Global", firstName)
// This is a reference error because lastName is only in local scope
console.log("apellido en Global", lastName)