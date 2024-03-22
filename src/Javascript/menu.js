document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
    const navbar = document.getElementById('navbar-sticky');

    menuButton.addEventListener('click', function () {
        navbar.classList.toggle('hidden');
    });
});