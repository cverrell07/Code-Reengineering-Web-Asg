function scrollToContents() {
    const contents = document.querySelector(".contents");
    const windowHeight = window.innerHeight;
    const contentsHeight = contents.offsetHeight;
    const scrollPosition = contents.offsetTop - (windowHeight - contentsHeight) / 2;
    
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
}

function redirectToChangePreventers() {
    window.location.href = "./views/change-preventers.html";
}

function redirectToDispensables() {
    window.location.href = "./views/dispensables.html";
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show-menu');
    });
});
