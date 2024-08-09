//this if for the collapsible btns that will wants
const collapsibleBtns = document.querySelectorAll('.collapsible-btn');
const collapsibleContents = document.querySelectorAll('.collapsible-content');

collapsibleBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        collapsibleContents[index].classList.toggle('collapsed');
    });
});