//this if for the collapsible btns that will wants
const collapsibleBtns = document.querySelectorAll('.collapsible-btn');
const collapsibleContents = document.querySelectorAll('.collapsible-content');

collapsibleBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        collapsibleContents[index].classList.toggle('collapsed');
    });
});

//IGNORE THIS PART - THIS IS FOR AARAV
// const sidebar = document.querySelector('.sidebar');
// const toggleButton = document.querySelector('.toggle-sidebar');
// const caret = toggleButton.querySelector('.fa-angle-right');


toggleButton.addEventListener('click', () => {
    sidebar.style.transform = sidebar.style.transform === 'translateX(-250px)' ? '' : 'translateX(-250px)';
    caret.style.transform = caret.style.transform === 'rotate(180deg)' ? '' : 'rotate(180deg)';
});

const menuToggle = document.querySelector('.toggle-sidebar');
const wrapper = document.querySelector('.wrapper');

menuToggle.addEventListener('click', () => {
    wrapper.classList.toggle('menu-open');
});
