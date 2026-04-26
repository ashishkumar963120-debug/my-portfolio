/**
 * Scroll Reveal Animation
 * Handles elements popping into view as the user scrolls
 */
const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    const elementVisible = 150; // Threshold in pixels

    reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
};

// Event listeners for scroll and initial load
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


/**
 * Video Resume Controller
 * Handles custom play/pause behavior for the portrait video
 */
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('resumeVideo');
    const playBtn = document.getElementById('playBtn');
    const wrapper = document.querySelector('.video-wrapper-portrait');

    // Functional check: Only proceed if elements exist
    if (video && playBtn && wrapper) {
        
        const togglePlay = () => {
            if (video.paused) {
                video.play();
                wrapper.classList.add('video-playing');
                // Change icon to pause when playing
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                video.pause();
                wrapper.classList.remove('video-playing');
                // Change icon back to play when paused
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        };

        // Listeners for both the button and the video surface
        playBtn.addEventListener('click', togglePlay);
        video.addEventListener('click', togglePlay);

        // Reset UI when video finishes
        video.addEventListener('ended', () => {
            wrapper.classList.remove('video-playing');
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        });
    }
});
