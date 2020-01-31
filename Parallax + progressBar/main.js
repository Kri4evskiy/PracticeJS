// Parallax Effect

document.addEventListener('mousemove', parallax);

function parallax(event) {
    this.querySelectorAll('.picture').forEach(picture => {
        let speed = picture.getAttribute('data-speed')
        picture.style.transform = `translateX(${event.clientX * speed / 500}px)`

    });
}

// ProgressBar

const progress = document.querySelector('.progress');

window.addEventListener('scroll', progressBar);

function progressBar(e) {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let per = windowScroll / windowHeight * 100;

    progress.style.width = per + '%'
}
