let stars=document.querySelectorAll(".star span")

stars.forEach((item,ind)=>{
    item.addEventListener("click",()=>{
        stars.forEach((item1,ind1)=>{
            ind>=ind1?item1.classList.add("active"):item1.classList.remove("active")
        })
    })
}

)