var students = ["Maria", "Richie", "Sergio", "Julian", "Claudia"]

function greetingStudents(student){
    console.log(`Hello ${student}`)
}

// for(var i = 0; i < students.length; i++){
//     greetingStudents(students[i])
// }

for(var student of students)  {
    greetingStudents(student);

}