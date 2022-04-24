function pijarFood(harga, voucher, jarak, pajak){
    let potongan = 0; 
    let biayaAntar = 0;
    let ppn = 0;
    if (jarak > 2 ){
        biayaAntar = 5000 + (Math.floor(jarak-2) * 3000);
    } else {
        biayaAntar = 5000;
    }
    if (voucher === "PIJARFOOD5" && harga > 50000){
        potongan = 0.5 * harga ;
        if ( potongan > 50000){
            potongan = 50000
        }
    } else if (voucher === "DITRAKTIRPIJAR" && harga > 25000){
        potongan = 0.6 * harga;
        if ( potongan > 30000){
            potongan = 30000
        }
    } else {
        potongan = 0;
    }
    if (!!pajak){
        ppn = 0.05 * harga;
    }else {
        ppn = 0;
    }
    console.log(`Harga          : ${harga}`)
    console.log(`Potongan       : ${potongan}`)
    console.log(`Biaya Antar    : ${biayaAntar}`)
    console.log(`Pajak          : ${ppn}`)
    console.log(`Subtotal       : ${harga - potongan + biayaAntar + ppn} (Harga - Potongan + Biaya Antar + Pajak )`)
    console.log(`--------------------------------------------------------------`)
}

pijarFood(75000,"PIJARFOOD5",5,true)
pijarFood(50000,"DITRAKTIRPIJAR",10,false)