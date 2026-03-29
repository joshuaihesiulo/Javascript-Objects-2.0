let school = {
  name: "Greenfield Academy",
  classes: [
    { className: "JSS 1", students: 45 },
    { className: "JSS 2", students: 38 },
    { className: "JSS 3", students: 50 },
    { className: "SS 1", students: 42 },
    { className: "SS 2", students: 36 },
    { className: "SS 3", students: 29 }
  ]
};
let totalStudents= 0

console.log(school.name)
for(i=0; i<school.classes.length; i++){
    console.log(`${school.classes[i].className} --> ${school.classes[i].students} students`)
    totalStudents= totalStudents+ school.classes[i].students
}
console.log(`There are ${totalStudents} total students`)