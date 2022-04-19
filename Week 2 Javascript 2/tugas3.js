
// array = [2, 25, 4, 14, 17, 30, 8]
function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    (nilaiAwal > nilaiAkhir) ? console.log("Nilai Akhir harus Lebih besar dari Nilai Awal") : doValidate();
    function doValidate(){
        (dataArray.length <= 5) ? console.log("Jumlah data Dalam Array harus Lebih besar dari 5") : doSelection();
    }
    function doSelection(){
        let newNilai = dataArray.filter( nilai => nilai > nilaiAwal && nilai < nilaiAkhir);
        (newNilai.length == 0) ? console.log("Data Tidak ditemukan") : console.log(newNilai.sort((a,b) => a-b));
    }
    
}


seleksiNilai(5, 30 , [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(5, 17 , [2, 25, 4])
seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])