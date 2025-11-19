//Promise
// $.ajax({
//     url: "http://www.omdbapi.com/?i=tt3896198&apikey=92f5f773",
//     success: movies => console.log(movies),
// })


// Fecth
// fetch(' http://www.omdbapi.com/?i=tt3896198&apikey=92f5f773')
//     .then(reponse => reponse.json())
//     .then(response => console.log(response))


// apa itu Promise = janji,
// sebuah object yang merepresntasikan keberhasilan / kegagalan a event yang asynchronous di masa yg akan datang
// janji(terpenuji / Ingkar)

// states(fulfield / rejected / pending)
// callback(resolve / reject / finally)
// aksi(then / catch)

// // ex: 1
// let ditepati = false        
// const janji1 = new Promise((resolve, reject) =>{
//     if(ditepati){
//         resolve('Janji telah ditepati')
//     }else{
//         reject('Ingkar janji')
//     }
// })

// janji1 
//     .then(response => console.log('OK' + response))
//     .catch(response => console.log('tidak' + response))


// ex : 2
// let ditepati = true
// const janji = new Promise((resolve, reject) => {
//     if(ditepati){
//         setTimeout(() =>{
//             resolve('Ditepati setelah beberapa waktu')
//         }, 2000)
//     }else{
//         setTimeout(() =>{
//             resolve('tidak ditepati setelah beberapa waktu')
//         }, 2000)
//     }
// })

//     console.log('mulai')
//     // console.log(janji.then(() => console.log(janji)))
//     janji
//     .finally(()=> console.log('selesais menunggu'))
//     .then(response => console.log('OK' + response))
//     .catch(response => console.log('tidak' + response))


//     console.log('selesai')

// Promise.all()

// const film = new Promise(resolve => {
//     setTimeout(()=>{
//         resolve([{
//             judul: 'Avengerts',
//             sutradara: 'epan',
//             pemeran:'negan'
//         }])
//     }, 1000)
// })

// const cuaca = new Promise(resolve =>{
//     setTimeout(() => {
//         resolve([{
//             kota: 'bandung',
//             temp:26,
//             kondisi:'Cerah Berawan'
//         }])
//     }, 500);
// })

// // film.then(response => console.log(response))
// // cuaca.then(response => console.log(response))

// Promise.all([film,cuaca])
// // .then(reponse => console.log(reponse))
//     .then(response => {
//         const [film, cuaca] = response
//         console.log(film)
//         console.log(cuaca)
//     })