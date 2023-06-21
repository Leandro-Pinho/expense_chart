var tablinks = document.getElementsByClassName("barra");


function opentab() {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    event.currentTarget.classList.add("active-link");
   
}