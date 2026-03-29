let employees = [
  { name: "Tunde", role: "Manager", salary: 350000 },
  { name: "Sola", role: "Developer", salary: 280000 },
  { name: "Kemi", role: "Designer", salary: 220000 },
  { name: "Femi", role: "Manager", salary: 370000 },
  { name: "Lola", role: "Developer", salary: 260000 }
];
let totalSalary= 0
let lowestSalary= 1000000000000000000000000000000000

for(i=0; i< employees.length; i++){
    if(employees[i].role == "Developer"){
        console.log(employees[i].name)
    }}

for(i=0; i< employees.length; i++){
    totalSalary= totalSalary + (employees[i].salary)
}
console.log(`Total Salary of all employees = ₦${totalSalary}`)

for(i=0; i< employees.length; i++){
  if(employees[i].salary<lowestSalary){
        lowestSalary= employees[i].salary
    }}
    console.log(`The lowest salary of an emplyee is ${lowestSalary}`)