let students= 
    {
    name: "Joshua", score: [{ Math: 89, English: 95, Science: 83}],
    name: "Solomon", score: [{ Math: 75, English: 65, Science: 93}],
    name: "Stephanie", score: [{ Math: 65, English: 100, Science: 94}],
    name: "Emmanuel", score: [{ Math: 100, English: 69, Science: 70}],
    name: "George", score: [{ Math: 100, English: 100, Science: 100}],
    name: "Smart", score: [{ Math: 90, English: 88, Science: 76}]
}        


console.log(students)
let average = 0

for(i=0; i<students.score.length; i++){
    console.log(students.score[i])
    average= students.score[i] / students.score[i].length
    console.log(average)
}