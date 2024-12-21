let btn = document.querySelector(".btn");
let name = document.querySelector("#name");
let email = document.querySelector("#email")

btn.addEventListener("click",()=>{
let data={
  fullName :name.value,
  email:email.value
}
console.log(data)
let head = document.querySelector(".head");
head.textContent =data
})