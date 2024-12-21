
let form = document.querySelector(".form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let psd = document.querySelector("#psd")
let cnfPsd = document.querySelector("#cnfPsd");
let male = document.querySelector("#male");
let female = document.querySelector("#female");
let maths = document.querySelector("#maths");
let english = document.querySelector("#english");
let science = document.querySelector("#science");
let social = document.querySelector("#social");
let bio = document.querySelector("#bio");
let psdText =document.querySelector(".psdText")
let date = document.querySelector("#date")

form.addEventListener("submit",(e)=>{
e.preventDefault();
if(psd.value !== cnfPsd.value){
    alert("password incorrect")
}
let data={
    name:name.value,
    email:email.value,
    male:male.value,
    female:female.value,
    maths:maths.value,
    english:english.value,
    science:science.value,
    bio:bio.value,
    bate:date.value,
}
console.log(data)
})

psd.addEventListener("change",(e)=>{
if(e.target.value.length<6){
    e.target.style.boxShadow= "5px 5px 5px 5px red"
    psdText.classList.remove("none")

}else{
        e.target.style.boxShadow= "5px 5px 5px 5px green";
        psdText.classList.add("none");
}
})