document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');

    const updateMenuToggleVisibility = () => {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
        } else {
            menuToggle.style.display = 'none';
            sidebar.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    };

    const toggleSidebar = () => {
        sidebar.classList.toggle('active');
        menuToggle.classList.toggle('active');
    };

    updateMenuToggleVisibility();

    menuToggle.addEventListener('click', toggleSidebar);
    window.addEventListener('resize', updateMenuToggleVisibility);
});
