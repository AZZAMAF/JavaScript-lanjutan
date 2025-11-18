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

        