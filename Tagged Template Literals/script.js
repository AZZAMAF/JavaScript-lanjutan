
// const nama = 'azzam'
// const umur = 13

// function coba(strings, ...values){
//     // let result = ''
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // })
//     // return result

//     return strings.reduce((result, str, i) =>  `${result}${str}${values[i] || ''}`,'')
// }
// const str= coba `halo saya ${nama}, umur ${umur} tahun`
// console.log(str);


// Highlight
const nama = 'azzam'
const umur = 13

function Highlight(strings, ...values){

    return strings.reduce((result, str, i) =>  
        `${result}${str}<span class='hl'>${values[i] || ''}</span>`,'')
}
const str= Highlight `halo saya ${nama}, umur ${umur} tahun`
console.log(str);
