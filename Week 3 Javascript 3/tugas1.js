const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat'];
            let cek = dataDay.find(item => {
                return item === day
            })
            if (cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan Hari Kerja'))
            }
        }, 3000)
    })
}

// menggunakan then dan catch
// cekHariKerja('jumat')
// .then(data => {
//     console.log(`${data} adalah hari kerja`);
// })
// .catch(data =>
//     console.log(data))

// menggunakan try dan catch
const result = async () => {
    try {
        const data = await cekHariKerja('jumat')
        console.log(`${data} adalah hari kerja`)
    }catch(err){
        console.log(err)
    }
}
result()