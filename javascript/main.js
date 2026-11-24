    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const icono = menuToggle.querySelector("i");

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("activo");
        const activo = navLinks.classList.contains("activo");

        menuToggle.setAttribute("aria-expanded", activo ? "true" : "false");
        menuToggle.setAttribute("aria-label", activo ? "Cerrar menú" : "Abrir menú");

        if(activo){
            icono.classList.remove("bi-list");
            icono.classList.add("bi-x-lg");
        }else{
            icono.classList.remove("bi-x-lg");
            icono.classList.add("bi-list");
        }

    });

    const enlaces = document.querySelectorAll(".nav-links a");

    enlaces.forEach(enlace => {

        enlace.addEventListener("click", () => {

            navLinks.classList.remove("activo");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");

            icono.classList.remove("bi-x-lg");
            icono.classList.add("bi-list");

        });

    });




    const scrollToTopButton = document.querySelector('#scrollToTop');

    window.addEventListener('scroll', () => {

        if (document.documentElement.scrollTop > 100) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }

    });

    scrollToTopButton.addEventListener('click', (e) => {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });