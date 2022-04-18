let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}
// Soal A
let newData = {...data,
name : "Muhamad Islahuddin",
email : "el.islah.udin@gmail.com",
hobby : ["menggambar","ngoding","musik"]}

console.log(newData);

// Soal B

let {street, city} = newData.address;
console.log(street);
console.log(city);