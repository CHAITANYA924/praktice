let fetchQuote=async()=>{
  let data = await fetch("https://api.github.com/users");
  let returnData =await data.json();
  console.log(returnData);
  onConcole(returnData)

}
fetchQuote()
let onConcole=(details)=>{
  details.forEach((item)=>{
    let head = document.querySelector(".head");
    console.log(item.login)

    let title =document.createElement("h1")
    title.textContent=item.login;
    head.append(title)
   
  })
}


