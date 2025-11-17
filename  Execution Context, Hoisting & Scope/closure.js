//Lexical Scope 

function init (){
    let nama = 'azzam' //local var
    function showname(){    // inner function (closure)
        console.log(nama) // akses ke parent var
    }
    showname()
}

init()



function init (){
    return function(nama){    // inner function (closure)
        console.log(nama) // akses ke parent var
    }
    
}

let panggilNama = init()
panggilNama('galih')

// Kenapa memakai closure
// 1. for make function factories
// 2. priveate method


// factories function
function ucapkanSalam(waktu){
    return function(nama){
        console.log('hallo',nama,'selamat',waktu)
    }
}

let selamatPagi =  ucapakanSalam('Pagi');


selamatPagi('azzam')


let add  = (function (){
    let counter = 0;
    return function(){
        return ++counter;
    }
})()

console.log(add())