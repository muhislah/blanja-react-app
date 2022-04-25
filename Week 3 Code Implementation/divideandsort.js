function divideAndSort(number){
    let string = number.toString() // change data to string
    let data =  string.split("0") // result array of string numbers
    let hasilSplit = data.map(item => item.split("") // result array of array number
                    .map(item => parseInt(item)) // change every string of number to Number typedata
                    .sort() // sort every array 
                    .join('') // result an array of string Number sorted
                )
    let hasil = hasilSplit.join('') // result a string of Numbers
    return console.log(+hasil); // +data is change string to number
}

// function divideAndSort(number){
//     let string = number.toString() // change data to string
//     let data =  string.split("0") // result array of string numbers
//     let arrays = [];
//     let dataAkhir = []
//     for (i = 0 ; i < data.length ; i++){
//         arrays[i] = data[i].split("")
//         dataAkhir[i] = arrays[i].map(item => parseInt(item)).sort().join('')
//     }
//     let hasil = dataAkhir.join('') // result a string of Numbers
//     return console.log(+hasil); // +data is change string to number
// }

divideAndSort(5956560159466056)