const cekKehadiran = (nama) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const dataSiswa = ['islah','udin','muhammad','budi','jon'];
            let kehadiran = dataSiswa.find(namaSiswa => namaSiswa.toLowerCase() === nama.toLowerCase() )
            if (kehadiran){
                resolve(kehadiran)
            }else{
                reject(new Error('Tidak Hadir'))
            }
        }, 3000)
    })
}

const result = async (nama1, nama2) => {
    try {
        const data = await cekKehadiran(nama1);
        const data2 = await cekKehadiran(nama2)
        console.log(`${data} dan ${data2} Hadir`)
    } catch(error){
        console.log(error)
    }
}
result('islah','tony')



// const cariFilm = (namaFilm) => {
//     return new Promise((resolve, reject) => {
//         const url = `http://www.omdbapi.com/?apikey=abd75bd1&s=${namaFilm}&r=json`;
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET',url);
//         xhr.onload = function(){
//             if (this.status === 200){
//                 const data = JSON.parse(this.responseText)
//                 // console.log(data)
//                 if(data.Response === "True"){
//                     resolve(data)
//                 }else{
//                     reject(new Error('Movie Not Found'))
//                 }
//             }else{
//                 reject(new Error(`There's Error`))
//             }
//         }
//         xhr.send() 
//     })
// }

// cariFilm('avenger')
// .then(data => {
//     data.Search.map(data => console.log(data.Title))
// })
// .catch(data => console.log(data))

