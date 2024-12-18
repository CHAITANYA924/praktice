let data ;
let promise = new Promise((resolve,reject)=>{
if(data===true){
  let ans = "i love my india";
  resolve(ans)
}else{
  let failed = "he is not";
  reject(failed)
}
}).then((item)=>console.log(item)).catch((err)=>console.log(err))