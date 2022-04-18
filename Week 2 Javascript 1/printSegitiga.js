const printSegitiga = 6;
if (typeof (printSegitiga) != "number") {
    console.log("Data Harus Number")
} else {
    for (let x = printSegitiga; x >= 1; x--) {
        let str = ""
        for (let y = 1; y <= x; y++) {
            str += y;
        }
        console.log(str);
    }
}