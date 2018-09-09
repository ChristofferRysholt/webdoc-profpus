function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

var video = document.getElementById('introvideo');

const videoPlayer = document.querySelectorAll('.vd');

function checkSlide(e) {
    videoPlayer.forEach(videoPlayer => {
        //halvejs gennem video
        const playIf = (window.scrollY + window.innerHeight) - videoPlayer.height / 2;
        //bunden af video
        const videoBottom = videoPlayer.offsetTop + videoPlayer.height;
        const isHalfShown = playIf > videoPlayer.offsetTop;
        const isNotScrolledPast = window.scrollY < videoBottom;
        if (isHalfShown && isNotScrolledPast) {
            video.play();
        } else {
            video.pause();
        }
        
    });
}

window.addEventListener('scroll', debounce(checkSlide));
