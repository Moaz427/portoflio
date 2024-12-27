const btn = document.getElementsByClassName("cc")[0];
window.onscroll = ()=>{
    if (window.scrollY > 700 ) {
        btn.style.display="block";
    }else{
        btn.style.display="none";
    }
}
btn.addEventListener("click" ,()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})