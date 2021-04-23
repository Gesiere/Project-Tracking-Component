const hamburger = document.querySelector('.open-hamburger');
const close_btn = document.querySelector('.close-btn');
const mobile_menu = document.querySelector('.mobile-menu');


hamburger.addEventListener('click', () => {
    mobile_menu.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
    close_btn.classList.toggle('hidden');
});

close_btn.addEventListener('click', () => {
    mobile_menu.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
    close_btn.classList.toggle('hidden');
})