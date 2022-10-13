// enhanced object literal

function newUser(user, age, country, uId){
    return { 
        user,
        age,
        country,
        uId
    }
}

console.log(newUser('Richie', 34, 'CO', 1))