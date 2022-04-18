// 10 method dan pejelasannya selain 
// split, reverse, join, foreach, map
// String
// 1. includes(parameter) => return boolean
// adalah method string yang digunakan untuk mencari apakah didalam string tersebut terdapat kata / substring yang diberikan
// const kalimat = "ini adalah budi";
// console.log(kalimat.includes("budi"));
// 2. replace(substr, newSubstr) => return String
// method ini digunakan untuk mengganti substring awal yang ada dengan substring baru
// const kalimat = "ini adalah budi, dan budi adalah kakak saya";
// console.log(kalimat.replace("budi","udin"))
// 3. toLowercase() => return String
// method ini digunakan untuk menampilkan huruf kecil dari string yang dimasukkan
// const kalimat = "kaLimat tiDak BERAturan";
// console.log(kalimat.toLowerCase());
// 4. search(parameter) => return Number / index
// method ini digunakan untuk menampikan index dari karater yang ditemukan
// const kalimat = "ini adalah budi, dan budi adalah kakak Saya";
// console.log(kalimat.search(','));
// 5. replaceAll(substr, newSubstr) => return String
// ethod ini digunakan untuk mengganti substring awal yang ada dengan substring baru
// const kalimat = "ini adalah budi, dan budi adalah kakak saya";
// console.log(kalimat.replaceAll('budi','udin'));
// Array
// 6. filter(callback) => return array
// callback berisi (element, index, array) => return array
// method ini mengembalikan nilai element apabila kondisi data dalam array bernilai true
// const namaMobil = ["toyota",'honda','daihatsu','ford',"chevrollet"];
// console.log(namaMobil.filter(mobil => mobil[0] == "h"))
// 7. push(element) => return length, merubah array asli
// method ini digunakan untuk memasukkan element ke urutan terakhir array
// const namaMobil = ["toyota",'honda','daihatsu','ford',"chevrollet"];
// namaMobil.push('f1')
// console.log(namaMobil)
// 8. concat(element / value) => return array
// method ini menambahkan value / menggabungkan array
// const array1 = [1,2,3];
// const array2 = [4,5,6];
// const array3 = array1.concat(array2);
// console.log(array3)
// 9. pop() => return data dalam array
// method ini digunakan untuk mengambil data dari array yang terakhir
// method ini mengubah jumlah length array aslinya
// const mobil = ['daihatsu','honda','mitsubishi','hino'];
// console.log(mobil.pop());
// console.log(mobil)
// 10. reduce(callback, startAccumulator) => return Number
// method ini digunakan melakukan operasi pada seluruh data dalam array
// const angka = [1,2,3,4,5,6] // total 21
// const newAngka = angka.reduce((accu, current) => accu + current)
// console.log(newAngka)