// Spread Operator
// Memecah iterables menjadi single element


// const mhs = ['azzam','irgi','dede']
// console.log(...mhs[1])

// Menggabungkan 2 array
// const mhs = ['azzam','irgi','dede']
// const dosen = ['ucup','agus','axel']
// const orang = [...mhs,'ads', ...dosen] // tegabung deh // tapi ini more flexibel coy
// // const orang = mhs.concat(dosen) // hasilnya sama    
// console.log(orang)

// Mengcopy Array 
// const mhs = ['azzam','irgi','dede']
// // const mhs1 = mhs // tapi ini mah bkn mengcopy cuman pindah nama doang coy
// // mhs1[0] = 'fajar' // mhs : bakal ke ganti juga coy 
// // gini caranya weh
// const mhs1 = [...mhs]
// mhs1[0] = 'zaki'
// console.log(mhs) // nah kek gini baru beneran ke copy coy// mhs : azzam// mhs1 : zaki


// const liMhs = document.querySelectorAll('li')
// normal Way
// const mhs = []
// for(let i = 0; i < liMhs.length; i++){
//     mhs.push(liMhs[i].textContent)
// }
// console.log(mhs)

// const mhs = [...liMhs].map(m => m.textContent)
// console.log(mhs)

const nama = document.querySelector('.nama')
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('')
console.log(huruf)

nama.innerHTML = huruf