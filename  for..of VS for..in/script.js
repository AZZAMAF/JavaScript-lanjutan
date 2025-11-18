

// Array di For of
// const mhs = [ 'azzam','dede','kiki']

// for( let i = 0; i < mhs.length; i++){
//     console.log(mhs[i])
// }

// mhs.forEach(m => console.log(m))

// for ( const m of mhs){
//     console.log(m)
// }

// String di For of
// const nama= 'azzam'
// for (const n of nama){
//     console.log(n)
// }

// For each kaga bisa loop string ya
// tapi ini kelebihannya bisa ngambil index
// const mhs = [ 'azzam','dede','kiki']
// i = index
// mhs.forEach((m,i) => {
//     console.log(`${m} adalaha Mahasiswa ke-${i + 1}`)
// })

// sedangkan for of bisa juga tapi harus di akalin :: pake entries

// for([i, m]of mhs.entries()){
//     console.log(`${m} adalaha Mahasiswa ke- ${i + 1}`)
// }

// NODE LIST
const liNama = document.querySelectorAll('.nama')

// liNama.forEach(n => console.log(n.innerHTML))
// for( n of liNama){
//     console.log(n.innerHTML)
// }

// //Arguments
// function jumlahkanAngka(){
//     let jumlah = 0
//     for(a of arguments){
//         jumlah += a
//     }
//     return jumlah
// }

// console.log(jumlahkanAngka(1,2,3,4,5))


// For in 
const mhs = {
    nama: 'afas',
    age: 12,
}
for(m in mhs){
    console.log(mhs[m])
}