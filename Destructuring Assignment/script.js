// Destructuring Variable / Assigment

// Destructuring Array

// const perkenalan = ['halo', 'nama', 'saya','azzam']


// // const [salam,  satu, dua , nama] = perkenalan;
// const [salam,,, nama] = perkenalan; // skipp items k

// console.log(nama)


// // swap items

// let a = 1
// let b = 10
// console.log(a)
// console.log(b)
// [a,b] = [b,a]
// console.log(a)
// console.log(b)

// return value pada function
// function coba(){
//     return [1, 2]
// }

// const [c,d] =coba();
// console.log(d)

// // Rest Parameter
// const [a, ...values] = [1,2,3,4,5]
// console.log(a)
// console.log(values[2])

// Distructering Object
// const mhs = {
//     nama: 'azzam',
//     age: 12
// }

// const {nama, age} = mhs // NOTE : Harus sama dengan Property nya
// console.log(nama + age)

// // Assigment tanpa deklarasi Object
// ( {nama, age} = {
//     nama: 'azzam',
//     age: 12
// }) // NOTE : Harus pake ini sayaratnya ()
// console.log(nama + age)


// // Asiggn to variabel baru
// const mhs = {
//     nama: 'azzam',
//     age: 12
// }

// const {nama:N, age:U} = mhs // NOTE : Harus pake : for change the name of var
// console.log(N)

// // Give default value
// const mhs = {
//     nama: 'azzam',
//     age: 12,
//     email:'@azzm'
// }
//                             // NILAI DEFAULT
// const {nama, age, email = 'emaildefaulit@email' }= mhs // NOTE : 
// console.log(nama + age + email)

// // Memberi Nilai Default + assign ke variabel baru
// const mhs = {
//     nama: 'azzam',
//     age: 12,
//     email:'@azzm'
// }
//                             // NILAI DEFAULT
// const {nama:n, age:u, email:e = 'emaildefaulit@email' }= mhs // NOTE : 
// console.log(n+e)


// // Rest Parameter
// const mhs = {
//     nama: 'azzam',
//     age: 12,
//     email:'@azzm'
// }
//                             // NILAI DEFAULT
// const {nama, ...values}= mhs // NOTE : 
// console.log(values)


// Mengambil field pada object, setelah dikirm sebagai parameter 
// untuk function

const mhs = {
    id:1232,
    nama: 'azzam',
    age: 12,
    email:'@azzm'
}
            // jadi yang di ambil id nya aje ye
function getIdmhs({id}) {
    return id
}

console.log(getIdmhs(mhs))