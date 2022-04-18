const mtk = 80;
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69

if (mtk != null && bahasaIndonesia != null && bahasaInggris != null && ipa != null) {
    let rata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
    let grade = "";
    if (rata >= 90) {
        grade = "A";
    } else if (rata >= 80) {
        grade = "B"
    } else if (rata >= 70) {
        grade = "C"
    } else if (rata >= 60) {
        grade = "D"
    } else {
        grade = "E"
    }
    console.log(`Rata-rata ${rata}
Grade ${grade}`)
} else {
    console.log("Harap masukkan semua nilai")
}