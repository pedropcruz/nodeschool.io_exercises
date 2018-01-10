let arr = process.argv,
    x;

arr.splice(2,arr.length).map((e)=>{
    x += Number(e);
});

console.log(x);