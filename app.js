var hamburgerOpen = document.querySelector(".hamburger");
var hamburgerclose = document.querySelector(".close");

var menu = document.querySelector(".nav-links-top");
var links = document.querySelectorAll(".nav-links");

hamburgerOpen.addEventListener("click", () => {

    if(!menu.classList.contains('active')) {
        menu.classList.add('active');
        hamburgerOpen.classList.add("active");
        hamburgerclose.classList.add("active");
        document.querySelector("body").style.overflowY = "hidden";

    }

    links.forEach(link =>
        link.addEventListener("click", () => {

            if(menu.classList.contains('active')) {
                menu.classList.remove('active');
                hamburgerOpen.classList.remove("active");
                hamburgerclose.classList.remove("active");
                document.querySelector("body").style.overflowY = "";
            }
        
        }
        )
    )

});

hamburgerclose.addEventListener("click", ()=> {

    if(menu.classList.contains('active')) {
        menu.classList.remove('active');
        hamburgerOpen.classList.remove("active");
        hamburgerclose.classList.remove("active");
        document.querySelector("body").style.overflowY = "";
    }

}
);