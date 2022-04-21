// // fetch api
const url = 'https://jsonplaceholder.typicode.com/users';
const data = fetch(url);
data.then(result => result.json()).then(result => {
    result.map(data => {
        console.log(data.name)
    })
}).catch(result => {
    console.log(result)
})


// async function cekFetch() {
//     const url = 'https://jsonplaceholder.typicode.com/users';
//     const data = await fetch(url);
//     return data.json()
// }

// cekFetch().then(data => console.log(data))
// .catch(data => console.log(data))