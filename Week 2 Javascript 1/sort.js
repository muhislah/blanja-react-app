a = [1,5,8,2,6,7];
b = a.sort((a,b) => {
    console.log(`a = ${a} dan b = ${b}`);
    return a-b
})
