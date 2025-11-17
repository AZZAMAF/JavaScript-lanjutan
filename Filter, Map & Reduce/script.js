

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]

// mencari angak >= 3
//for

// const newAngka = [];
// for (let i = 0; i < angka.length; i++){
//     if(angka[i] >= 3){
//         newAngka.push(angka[i])
//     }
// }

// //fileter
// const newAngka = angka.filter( a => a >= 3)
// console.log(newAngka)

//MAP   
// kalikan semua angka dengan 2
// const newAnga = angka.map(a => a*2)
// console.log(newAnga)

//reduce
// Jumlahkan seluruh element pada array

// const newAngka = angka.reduce((accumulator, currentvalue) =>
// accumulator + currentvalue)

// console.log(newAngka)


// Method Chaining
// mencari angka yang lebih besar dari 5 setalah itu kalikan 3 dan jumlahkan

const hasil = angka.filter(a => a >5) //8,9,9
    .map(a => a*3) // 24, 27, 27
    .reduce((acc,cur) => acc + cur ) //78

console.log(hasil)


