//Rest Parameter


// function myfunc(){ // only can use in the last parameter
//     // function myimpan var argument
//     // return a + myargs
//     // return Array.from(arguments)
//     return [...arguments] // banyak caranye coy
// }

// console.log(myfunc(12,2,3,45,6))

// function jumlahkan(...angka){
//     // let  total =  0
//     // for(const a  of angka){
//     //     total += a
//     // }
//     // return total

//     // return reduce
//     return angka.reduce((a,b) =>  a+b)
// }
// console.log(jumlahkan(1,2,3,4,5,6))

// // Array Destructering
// const kelompok1 =['dodit','rizki','ali','reza']
// const [ketua, wakil, ...anggota] = kelompok1 // Rest parameter

// console.log(ketua)

// Object Destructing
// const team = {
//     pm: 'sandhika',
//     frontEnd:'dodit',
//     frontEnd1:'raka',
//     backEnd: 'rara',
//     ux:'heri',
//     devOps:'rian'
// }

// const {pm, ...myTeam} = team
// console.log(myTeam)

// Filtering

function fillterBy(type, ...values){
    return values.filter(v => typeof v === type)
}

console.log(fillterBy('string', 1, 2, 'sandhika', false, 10, true, 'dody'))