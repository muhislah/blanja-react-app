kalimat = "aku makan budi"; // kalimat awal
let letakHurufAwal = []; // untuk menyimpan index huruf pertama
letakHurufAwal[0] = 0; // index[0] dari letakHurufawal = 0
let index = 1; 
for (let x = 0; x < kalimat.length; x++) {
    if (kalimat[x] == " ") {
        letakHurufAwal[index] = x + 1;
        index++;
    }
} // result [array of index of Letak Huruf Awal] // [0,4,10]

let kalimatAkhir = ""; // menampung kalimat akhir
for (a = letakHurufAwal.length - 1; a >= 0; a--) {
    let str = "";
    if (a == letakHurufAwal.length - 1) { // jika kata terakhir
        for (y = letakHurufAwal[a]; y <= kalimat.length - 1; y++) {
            str += kalimat[y]
        }
    } else { // jika selain kata terakhir
        str += " ";
        for (y = letakHurufAwal[a]; y <= letakHurufAwal[a + 1] - 2; y++) {
            str += kalimat[y]
        }
    }
    kalimatAkhir += str;
}
console.log(kalimatAkhir);