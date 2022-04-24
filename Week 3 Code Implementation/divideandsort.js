function divideAndSort(number){
    let string = number.toString() // change data to string
    let data =  string
                .split("0") // result array of string numbers
                .map(item => item.split("") // result array of array number
                    .map(item => parseInt(item)) // change every string of number to Number typedata
                    .sort() // sort every array 
                    .join('') // result an array of string Number sorted
                )
                .join('') // result a string of Numbers
    return console.log(+data); // +data is change string to number
}

divideAndSort(5956560159466056)