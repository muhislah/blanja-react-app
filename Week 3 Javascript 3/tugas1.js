const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat'];
            let cek = dataDay.find(item => {
                return item === day
            }) // cek return first data that contain condition
            if (cek){ // execute when not null / not undefined
                resolve(cek)
            }else{ // execute when undefined
                reject(new Error(`Hari ${day} bukan Hari Kerja`))
            }
        }, 3000)
    })
}

// menggunakan then dan catch
cekHariKerja('minggu')
.then(data => {
    console.log(`${data} adalah hari kerja`);
})
.catch(data =>
    console.log(data))

// menggunakan try dan catch
// const result = async () => {
//     try {
//         const data = await cekHariKerja('jumat')
//         console.log(`${data} adalah hari kerja`)
//     }catch(err){
//         console.log(err)
//     }
// }
// result()