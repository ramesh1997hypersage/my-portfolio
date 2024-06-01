function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }

    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}










  var sidemenu = document.getElementById("sidemenu");
function openmenu(){
sidemenu.style.right = "0";

}
function closemenu(){
sidemenu.style.right = "-200px";

}





const scriptURL = 'https://script.google.com/macros/s/AKfycbzRBzV1RYiYDPrux2fYuagXrfet65MhlGySU2fzM8rPSRYlS1bxBIdX4w8fUs1ou7dD/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
    msg.innerHTML = "Message sent successfully!"
    setTimeout(function(){
        msg.innerHTML=""
    },5000)
    form.reset()
})
.catch(error => console.error('Error!', error.message))
})