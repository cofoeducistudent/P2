



onload = function () {

    this.setInterval(collapseIt, 6000);

};

function collapseIt() {

    let element = document.getElementById('navbarNavAltMarkup');
    let ele = document.getElementById('navbar');



    element.classList.remove("show");

    

}



// onload = function(){

// document.getElementsByClassName('navbar').onclick = function(){

//     let ele = document.getElementById('navbar');
//     ele.classList.remove('ghostIt');

// }

// }