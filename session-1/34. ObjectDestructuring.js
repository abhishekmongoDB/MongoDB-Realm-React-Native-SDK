let student  = {
    full_name: "Abhishek",
    score : 90
}
const fullname =  student.full_name
const score =  student.score
// or 
// const {fullname, score} = student
// Or 

const {full_name : fullName, score: tScore} = student



console.log("student",student)
