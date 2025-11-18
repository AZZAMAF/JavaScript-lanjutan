//Callback
// Synchronous Callback 
// function hallo(nama){
//     alert(`Hallo ${nama}`)
// }


// function tampilkanPesan(Callback){
//     const nama = prompt('masukan Nama :')
//     Callback(nama)
// }

// tampilkanPesan(nama => alert(`Hallo, ${nama}`))

// const mhs = [
//     {
//         "nama": "Sandhika Galih",
//         "nrp": "043040023",
//         "email": "sandhikagalih@unpas.ac.id",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Doddy Ferdiansyah",
//         "nrp": "133040123",
//         "email": "doddy@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Erik",
//         "nrp": "104040001",
//         "email": "sandhikagalih@unpas.ac.id",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     }
// ]

// console.log('mulai')
// mhs.forEach(m => {
//     for (let i = 0; i<10; i++){
//         let date = new Date();
//     }
//     console.log(m.nama)
// })
// console.log('selesai')


// Asynchronous Callback
// function getDataMahasiswa(url, success, error){
//     let xhr = new XMLHttpRequest()

//     xhr.onreadystatechange = function () {
//         if( xhr.readyState === 4){
//             if(xhr.status === 200){
//                 success(xhr.response)
//             }else if (xhr.status === 404){
//                 error()
//             }
//         }
//     }
//     xhr.open('get',url)
//     xhr.send()
// }


// console.log('mulai')
// getDataMahasiswa('./data/mahasiswa.json', result =>{
//     const mhs = JSON.parse(result)
//     mhs.forEach(m => console.log(m.nama));
// }, () =>{

// })
// console.log('selesai')

console.log('mulai')

$.ajax({
    url: './data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    errror: () =>{

    }
})

console.log('selesai')