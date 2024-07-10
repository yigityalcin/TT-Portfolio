const preloader = document.querySelector('#preloader');
if (preloader) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('loaded');
        }, 1000);
        setTimeout(() => {
            preloader.remove();
            const contentElement = document.getElementById('content');
            if (contentElement) {
                contentElement.style.display = 'block';
            }
        }, 2000);
    });
}