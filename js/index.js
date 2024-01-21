// El menú desplegable
const modal = document.getElementById("menuModal")
        const btn = document.getElementById("burgerModal")
        const closeModal = document.getElementsByClassName("closeModal")[0];

        // Al darle click al botón o al icono de cerrar el display se cambia a block o none respectivamente
        btn.onclick = function() {
            modal.style.display = "block";
        }

        closeModal.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function() {
            if (event.target == modal) {
            modal.style.display = "none"  
            }
        }



// Hacemos fetch de los datos del archivo json
    var url ="datos.json";
    
    //Intervalo para el cambio de texto del banner
    setInterval(() => {
        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            cambiarBanner(data)
        })
    }, 2500)

    const banner = document.querySelector(".sectionBanner");

    var i = 0;

    // La función que hace cambiar al banner
    function cambiarBanner(data) {
        console.log(data.bannerData[i++]);
        if(i==2){i=0};
        banner.innerHTML = 
        `<span class="bannerText">${data.bannerData[i].title}</span>
        <span class="bannerSubtitle">${data.bannerData[i].subtitle}</span>`;
    }



// El loader de la web con un Timeout que hace que desaparezca a los x segundos
    let loader = document.getElementById('loader');

    window.onload = (event) => {
    setTimeout(function() {
        loader.classList.add("disappear");
        setTimeout(function() {
            loader.remove();
        }, 1250);
    }, 2400);
    };


// Fetch para la imprimir la galería de proyectos
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            imprimirGaleria(data)
    })


    const galeria = document.getElementById("galeriaP");

    galeria.innerHTML="";
    

    function imprimirGaleria(data) {

        // No conseguí hacer un forEach para cada dato a través del fetch por lo que escribí el innerHTML completo
        galeria.innerHTML += 
        `<div class="galleryContainer ${data.galleryData[0].class}">
            <a class="galleryLink" href="${data.galleryData[0].html}">
                <img class="galleryImg" src="${data.galleryData[0].img}" alt="">
            </a>
        </div>
        <div class="galleryContainer ${data.galleryData[1].class}">
            <a class="galleryLink" href="${data.galleryData[1].html}">
                <img class="galleryImg" src="${data.galleryData[1].img}" alt="">
            </a>
        </div>
        <div class="galleryContainer ${data.galleryData[2].class}">
            <a class="galleryLink" href="${data.galleryData[2].html}">
                <img class="galleryImg" src="${data.galleryData[2].img}" alt="">
            </a>
        </div>
        <div class="galleryContainer ${data.galleryData[3].class}">
            <a class="galleryLink" href="${data.galleryData[3].html}">
                <img class="galleryImg" src="${data.galleryData[3].img}" alt="">
            </a>
        </div>
        <div class="galleryContainer ${data.galleryData[4].class}">
            <a class="galleryLink" href="${data.galleryData[4].html}">
                <img class="galleryImg" src="${data.galleryData[4].img}" alt="">
            </a>
        </div>`
        };

// Función para la página multi-page
        function changePage(pageIndex) {
            const pagesContainer = document.querySelector('.pages');

            const uxui = document.getElementById('btnUxui');
            const web = document.getElementById('btnWeb');
            console.log(pageIndex)

            const offset = pageIndex * -(100 / 2); // Ancho de cada página (100%) multiplicado por el índice

            pagesContainer.style.transform = `translateX(${offset}%)`;

            // Condicional que añade o quita la clase active para que el usuario sepa en qué página se encuentra/qué página está seleccionada
            if (pageIndex < 1) {
                uxui.classList.add("active")
                web.classList.remove("active")
            }
            else {
                web.classList.add("active")
                uxui.classList.remove("active")
            }
        }


    