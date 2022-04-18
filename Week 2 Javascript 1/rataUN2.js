const mtk = 80;
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69

if (mtk != null) {
    if (bahasaIndonesia != null) {
        if (bahasaInggris != null) {
            if (ipa != null) {
                let grade = "";
                let rata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4
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
                console.log("Harap Memasukkan nilai IPA");
            }
        } else {
            console.log("Harap Memasukkan Nilai Bahasa Inggris")
        }
    } else {
        console.log("Harap Memasukkan Nilai Bahasa Indonesia")
    }
} else {
    console.log("Harap memasukkan Nilai MTK")
}

