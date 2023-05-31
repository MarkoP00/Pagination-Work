let link = document.getElementsByClassName('link');
let currentValue = 1; //1 zato sto je prvi element u li dobio klasu active

function activeLink(){
    for(l of link){
        l.classList.remove("active");
    }
}
link.addEventListener('click',activeLink)