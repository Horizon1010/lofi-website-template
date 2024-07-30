document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('myAudio');
    const volumeSlider = document.getElementById('volumeSlider');
    const playPauseIcon = document.getElementById('playPauseIcon');

    // Check if the audio element and play/pause icon exist
    if (audio && volumeSlider && playPauseIcon) {

        // Handle volume slider input
        volumeSlider.addEventListener('input', (e) => {
            audio.volume = e.target.value;
        });

        // Handle play/pause icon click
        playPauseIcon.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playPauseIcon.classList.remove('fa-play');
                playPauseIcon.classList.add('fa-pause');
            } else {
                audio.pause();
                playPauseIcon.classList.remove('fa-pause');
                playPauseIcon.classList.add('fa-play');
            }
        });

        // Set initial volume
        audio.volume = volumeSlider.value;

        // Debugging output to console
        audio.addEventListener('error', (e) => {
            console.error('Audio error', e);
        });

        audio.addEventListener('canplaythrough', () => {
            console.log('Audio can play through');
        });

        audio.addEventListener('play', () => {
            console.log('Audio is playing');
        });

        // Add animation to the header text
        const h1 = document.querySelector('h1');
        const textContent = h1.textContent;
        h1.textContent = '';

        for (let i = 0; i < textContent.length; i++) {
            const char = document.createElement('span');
            char.textContent = textContent[i];
            h1.appendChild(char);

            // Calculate delay based on character position
            const delay = i * 0.1; // Adjust delay for wave speed
            char.style.animationDelay = `${delay}s`;
        }

        // Handle the loading screen
        window.addEventListener('load', () => {
            const loadingScreen = document.querySelector('.loading-screen');
            const content = document.querySelector('.content');

            setTimeout(() => {
                loadingScreen.style.opacity = '0'; // Fade out the loading screen

                setTimeout(() => {
                    loadingScreen.remove();
                    content.style.display = 'block';
                }, 3000); // Delay removing the loading screen to match fade out animation
            }, 3000); // Adjust timeout duration to match animation
        });

    } else {
        console.error('Required elements not found');
    }
});