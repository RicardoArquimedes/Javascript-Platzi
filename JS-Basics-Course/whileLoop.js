var students = ["Maria", "Richie", "Sergio", "Julian", "Claudia"]

function greetingStudents(student){
    console.log(`Hello ${student}`)
}

while(students.length > 0){
    console.log(students)
    var student = students.shift();
    greetingStudents(student)
}