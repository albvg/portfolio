
// Función para el cambio de imagen del proyecto dictado por un intervalo
const brkbLofi = ['../images/proyectos/barkibu/barkibu-lofi1.png','../images/proyectos/barkibu/barkibu-lofi2.png','../images/proyectos/barkibu/barkibu-lofi3.png'];

const lofi = document.querySelector(".barkibuLofi");

const lofiPannel = setInterval(cambiarLofi, 2500);

var i = 0;

function cambiarLofi() {
    console.log(brkbLofi[i++]);
    if(i==3){i=0};
    lofi.innerHTML = 
    `<img src="${brkbLofi[i]}">`;
}

// Función para el cambio de imagen del proyecto dictado por un intervalo
const btmMockup = ['../images/proyectos/btm/btm-Img1.png','../images/proyectos/btm/btm-Img2.png','../images/proyectos/btm/btm-Img3.png'];

    const mockup = document.querySelector(".btmMockupContainer");

    const mockupChange = setInterval(cambiarMockup, 2500);

    var x = 0;

    function cambiarMockup() {
        console.log(btmMockup[x++]);
        if(x==3){x=0};
        mockup.innerHTML = 
        `<img src="${btmMockup[x]}">`;
    }

// El loader
    let loader = document.getElementById('loader');

    window.onload = (event) => {
    setTimeout(function() {
        loader.classList.add("disappear");
        setTimeout(function() {
            loader.remove();
        }, 1250);
    }, 2000);
    };