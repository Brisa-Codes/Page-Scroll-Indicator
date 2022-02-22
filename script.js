window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
// toggle adds the classList if doesn't exists or removes it if it exists

window.onscroll = () => scrollProgress();

function scrollProgress() {
    const currentState = document.body.scrollTop || document.documentElement.scrollTop;
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //console.log("pagHeight");
    
    const scrollPercentage = (currentState / pageHeight) * 100;
    //multipling it with 100 to get its percentage

    const progressBar = document.querySelector(".progress");
    progressBar.style.visibility = "visible";
    progressBar.style.width = scrollPercentage + "%";
}