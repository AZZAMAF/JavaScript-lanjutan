//Destructuring Function

// function penjumlahanPerkalian(a,b){
//     return [a + b, a * b]
// }

//Normal way 
// const jumlah = penjumlahanPerkalian(2,3)[0]
// const kali = penjumlahanPerkalian(2,3)[1]

//Destructuring Function
// const [jumlah, kali] = penjumlahanPerkalian(2,3)
// console.log(jumlah)
// console.log(kali)

// ======
// function kalkulasi(a,b){
//     return [a + b, a-b, a * b, a/b]
// }

// const [tambah, kurang, kali, bagi = 'kg ade'] = kalkulasi(12,12) // tapi ini urutan y
// console.log(bagi)

// Pake Object ben bs urutan

function kal(a,b){
    return{
        tambah: a+b,
        kurang: a-b,
        kali: a*b,
        bagi: a/b
    }
}

// rn urutan is np
const {bagi, kali, kurang, tambah} = kal(2,3)
console.log(bagi)

// // Destructuring function argument // Declaraion fanction

const mhs1 = {
    nama: 'assas',
    age: 12,
    id:1214534,  
    nilai : {
        tugas: 80,
        uts: 54,
        uas: 90
    }
}

// function cetakMhs(mhs1){
//     return `Nama: ${mhs1.nama}, Umur${mhs1.age}`
// }

// console.log(cetakMhs(mhs1))

// Destructuring di argument nya

function cetakMhs({nama, age, nilai: {tugas,uts,uas}}){
    return `Nama: ${nama}, Umur${age} and My Nilai is ${uts}`
}

console.log(cetakMhs(mhs1))

