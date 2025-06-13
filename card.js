document.addEventListener('DOMContentLoaded', (Event) => {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function () {

            document.querySelectorAll('.card').forEach((c) => {
                if(c !== card){
                    c.classList.remove("is-flipped");
                }
            })

            card.classList.toggle('is-flipped');
        });
    });
});