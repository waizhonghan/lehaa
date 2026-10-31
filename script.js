
const heartContainer = document.querySelector('.floating-hearts');

const symbols = ['♡', '♥', '💜', '✧', '🌸', '🦋'];

function createHeart() {
    if (!heartContainer) return;

    const heart = document.createElement('span');

    heart.className = 'heart';
    heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (12 + Math.random() * 20) + 'px';
    heart.style.animationDuration = (7 + Math.random() * 6) + 's';

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 13000);
}

setInterval(createHeart, 700);


// MUSIC BUTTON

const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

if (music && musicBtn) {

    musicBtn.addEventListener('click', async () => {

        if (music.paused) {

            try {
                await music.play();
                musicBtn.textContent = '♫ Pause Music';
            } catch (error) {
                musicBtn.textContent = 'Music unavailable';
            }

        } else {

            music.pause();
            musicBtn.textContent = '♫ Play Music';

        }

    });

}
