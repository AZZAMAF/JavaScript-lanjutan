//  Execution Context, Hoisting & Scope

// console.log(nama);
// var nama = 'azzam';

// Output = undifened
// because Creation Phase pada global Context
// Js will check  the variabel, all of var is undifined
// nama var = undefined
// nama function = fn ()
// hoisting = menarik bendera 
// window = global object
// this = window

//excution Phase


// var nama = 'ken';
// var umur = 33;
// console.log(sayHello())
// function sayHello(){
//     return `Hallo Nama saya ${nama} umur ${umur}`
// }

// functoin membuat Lokal Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

var nama = 'azzam'
var username = 'gantenget'

function cetakURl(username){// si dodi akan masuk ke argment coy
    // nah kalau dodinya gak ada gimana dong js bakal scoping ya guys nyari varibael 
    // terdekat apakah ada kalau gak ada ya bakal error
    var instagramURL ='https://www.youtube.com/watch?v=8mZsm9ZQFdY&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=4'
    return instagramURL + username;
}

// console.log(cetakURl(username))
console.log(cetakURl('dodi'))

// function a(){
//     console.log('ini a');

//     function b(){
//         console.log('ini b');
//         function c(){
//             console.log('ini c');
//         }
//         c()
//     }
//     b()
// }
// a()