// fetch api
const url = 'https://jsonplaceholder.typicode.com/users';
const data = fetch(url);
data.then(result => result.json()).then(result => {
    result.map(data => {
        console.log(data.name)
    })
}).catch(result => {
    console.log(result)
})
