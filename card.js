document.addEventListener('DOMContentLoaded', (Event) => {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function () {
            card.classList.toggle('is-flipped');
        });
    });
});