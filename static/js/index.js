

 

onload = function () {

    this.setInterval(collapseIt, 6000);


};


function collapseIt() {

 

    let element = document.getElementById('navbarNavAltMarkup');

    element.classList.remove("show");


}