kataAwal = "kasur ini rusak";
kataAkhir = "";
for ( x = kataAwal.length-1 ; x >=0 ; x--){
    kataAkhir += kataAwal[x];
}
if (kataAwal == kataAkhir){
    console.log("Palindrom")
}else{
    console.log("Bukan Palindrom")
}
