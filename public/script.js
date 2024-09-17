document.addEventListener('DOMContentLoaded', () => {
    const diamonds = document.querySelectorAll('.diamond');
    const infoSection = document.getElementById('info');
    const infoTitle = document.getElementById('info-title');
    const infoContent = document.getElementById('info-content');
    let activeDiamond = null;

    function updateInfo(diamond) {
        const title = diamond.querySelector('.content h3').textContent;
        const lessons = diamond.querySelector('.content ul').innerHTML;

        infoTitle.textContent = title;
        infoContent.innerHTML = lessons;
        infoSection.style.display = 'block';
    }

    function hideInfo() {
        infoSection.style.display = 'none';
    }

    diamonds.forEach(diamond => {
        diamond.addEventListener('mouseover', () => {
            if (!activeDiamond) {
                updateInfo(diamond);
            }
        });

        diamond.addEventListener('mouseleave', () => {
            if (!activeDiamond) {
                hideInfo();
            }
        });

        diamond.addEventListener('click', () => {
            if (activeDiamond) {
                activeDiamond.classList.remove('active');
            }

            activeDiamond = diamond;
            diamond.classList.add('active');
            updateInfo(diamond);
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.diamond')) {
            if (!activeDiamond) {
                hideInfo();
            }
        }
    });
});
