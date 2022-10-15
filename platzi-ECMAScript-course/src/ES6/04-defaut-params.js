function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country ||  'CO';
console.log(name, age, country)
}

newUser();
newUser('Ricardo', 30, 'MX')

// default params ES6

function newAdmin(name = 'Oscar', age = 30, country = 'CL'){
    console.log(name, age, country)
}

newAdmin();
newAdmin('Ana', 28, 'PE')