// 1. HTML Fragments
// const mhs = {
//     nama: 'Azam',
//     umur: 33,
//     nrp:'12233423',
//     email:'aafazzam@gmail.com'
// }


// const el = `<div class="mhs">
//         <h2>${mhs.nama}</h2>
//         <span class="nrp">${mhs.nrp}</span>
//     </div>`


// 3. Conditional
//ternary
// const lagu ={
//     judul:'aku teriak',
//     penyanyi:'wewe',
//     feat:'riri',
// }
// const el = `  <div class="lagu">
//         <ul>
//             <li>${lagu.penyanyi}</li>
//             <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})`: ''}</li>
//         </ul>
//     </div>`

// 4. Nested
// HTML Fragments bersarang

const mhs ={
    nama:'azzam',
    semsester:3,
    matKul: ['Rekayasa Web','Analisis dan Perancangan Sistem Informasi',
        'Pemrogramana sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
}

function cetakMataKuliah(matKul){
    return`
    <ol> 
    ${matKul.map(mk => `<li>${mk}</li>`).join('')}
    `
}
const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester: ${mhs.semsester}</span>
    <h4>Mata Kuliah:</h4>
    ${cetakMataKuliah(mhs.matKul)}
    
</div>`
document.body.innerHTML = el;