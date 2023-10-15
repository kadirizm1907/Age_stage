


function stageAge(){
let age ="20"
if (age < 0 || age > 130) {
  console.log("Unsupported number")
} else if (age < 2) {
  console.log("Infancy")
} else if (age >= 2 && age < 3 ) {
  console.log("Earlychildhood")
} else if (age >= 3 && age <= 5 ) {
  console.log("Preschool")
} else if (age > 5 && age <= 11 ) {
  console.log("Schoolage")
} 
else if (age > 11 && age <= 18 ) {
  console.log("AdoleScence")
} 
else if (age > 18 && age <= 40 ) {
  console.log("YoungAduld")
} 
else if (age > 40 && age <= 65 ) {
  console.log("MiddleAduld")
} 
else {
  console.log("Maturity")
}
return age
}
stageAge()