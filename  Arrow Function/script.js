
// // Function Declaration
// function tampilPesan (nama){
//     alert('halo' + nama)
// }

// tampilPesan('agus')

// // Function Expression
// let tampi = function (nama){
//     alert('halo' + nama)
// }

// tampil('awe')

// Arrow Function

// let tampilNama = (nama) =>{ return 'halo', nama} // satu parameter
// console.log('azzam')

// const tampilNama = (nama, waktu) =>{ // 2 parameter
//     return `selamat ${waktu} pak ${nama}`
// }

// console.log(tampilNama('agus','siang'))

// implisit return
// const tampilNama = nama =>`pak ${nama}`

// console.log(tampilNama('agus'))

// let mahasiswa = ['ahmen giffar','nuihsa','youyou'];

// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// })

// let jumlahHuruf = mahasiswa.map( nama => nama.length)

// console.log(jumlahHuruf)

// let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlhuruf: nama.length}))

// console.table(jumlahHuruf)


//Object Literal 
// const mhsl1 ={
//     nama: 'ads',
//     umur: 12,
//     sayHello: ()=> { // tidak memiliki konsep this, arrow funcitona akan mencari ke window
//         console.log(`hallo ${this.nama}. umur ${this.umur}`)
//     }
// }