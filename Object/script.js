// cara membuat object di javascript
//1.Object Literal
// let mahasiswa ={
//     nama: 'azzam',
//     energi: 10,
//     makan: function (porsi){
//         this.energi = this.energi + porsi;
//         console.log(`${this.nama} makan`);
//     }
// }
// let mahasiswa1 ={
//     nama: 'daus',
//     energi: 10,
//     makan: function (porsi){
//         this.energi = this.energi + porsi;
//         console.log(`${this.nama} makan`);
//     }
// }



//2.Function Declaration


// const Methodmahasiswa ={
//     makan :function(porsi){
//         this.energi += porsi ;
//         console.log('makan');
//         },
        
//     main : function(jam){
//             this.energi -= jam;
//             console.log('selamat Bermain')
//         },
//     sleep : function(jam){
//         this.energi += jam * 2 ;
//         console.log('selamat tidur')
//     }
// };
// function Mahasiswa(nama,energi){
//     let mahasiswa = {};
//         mahasiswa.nama = nama;
//         mahasiswa.energi = energi;
//         mahasiswa.makan = Methodmahasiswa.makan;
//         mahasiswa.main = Methodmahasiswa.main;
//         mahasiswa.sleep = Methodmahasiswa.sleep;
//             //Function Declaration
//         // mahasiswa.makan =function(porsi){
//         //     this.energi += porsi ;
//         //     console.log('makan')
//         // }
//         // mahasiswa.main = function(jam){
//         //     this.energi -= jam;
//         //     console.log('selamat Bermain')
//         // }
//     return mahasiswa;
// }
// let azzam =  new  Mahasiswa ('sandhika', 10)

// let sandhika = Mahasiswa('Azzam', 10);

// 3.Constructor Function

// function Mahasiswa(nama,energi){
    
//         this.nama = nama;
//         this.energi = energi;

//         this.makan =function(porsi){
//             this.energi += porsi ;
//             console.log('makan')
//         }
//         this.main = function(jam){
//             this.energi -= jam;
//             console.log('selamat Bermain')
//         }
    
// }

// let azzam =  new  Mahasiswa ('sandhika', 10)

// 4. Object Create

// const Methodmahasiswa ={
//     makan :function(porsi){
//         this.energi += porsi ;
//         console.log('makan');
//         },
        
//     main : function(jam){
//             this.energi -= jam;
//             console.log('selamat Bermain')
//         },
//     sleep : function(jam){
//         this.energi += jam * 2 ;
//         console.log('selamat tidur')
//     }
// };
// function Mahasiswa(nama,energi){
//     let mahasiswa = Object.create(Methodmahasiswa);
//         mahasiswa.nama = nama;
//         mahasiswa.energi = energi;
        
//     return mahasiswa;
// }
// let azzam =  new  Mahasiswa ('sandhika', 10)


// const no = ['1', '12'];\


// // Object Protype inharitance
// function Mahasiswa(nama,energi){
//     //Constracter Function
//     // let this = Object.create(Mahasiswa.prototype);
//     this.name = nama;
//     this.energi = energi;

//     // return this:
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `makan dulu`;
// }
// let azzam =  new  Mahasiswa ('sandhika', 10)

// versi class
class Mahasiswa{
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan (porsi){
        this.energi += porsi;
        return `makan dulu`;
    }
}
let azzam =  new  Mahasiswa ('sandhika', 10)