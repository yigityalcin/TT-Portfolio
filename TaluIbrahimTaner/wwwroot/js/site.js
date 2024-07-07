﻿
/**
   * Preloader
   */
const preloader = document.querySelector('#preloader');
if (preloader) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('loaded');
        }, 1000);
        setTimeout(() => {
            preloader.remove();
            document.getElementById('content').style.display = 'block';
        }, 2000);
    });
}

