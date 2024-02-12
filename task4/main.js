// const students = ["Tom","bob","Harry"];
// for (let i = 0; i < students.length; i++) {
//     let resault = students[i];
//     console.log(resault);
// }

// let people = [ ["Tom", 18], ["Carl", 12], ["Stan", 11] ];
// console.log(people[1][0]);
// for (let i = 0; i < people.length; i++) {
//     for (let j = 0; j < people[i].length ; j++) {
//         let resault = people [i] [j];
//         console.log(resault);
//     }
//     console.log("-----------");
// }

// const students = ["Tom","bob","Harry"];

// in - индексы массива
// of - элементы массива

// for (let item of students) {
// console.log(students[item]);
// }

const person = {name: "Tom", age: 23};

for (let item in person) {
    console.log(item,":", person[item]);
}