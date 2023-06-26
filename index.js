(() => {
    window.addEventListener('keydown', (e) => {
        e.preventDefault();
        if (e.code === "Escape")
            hideVideo();
    }, true);
    
    let mainButton = document.getElementById('main-button');
    mainButton.addEventListener('click', playVideo);

    function playVideo() {
        console.log('play')
        mainButton.style.display = 'none';
        let videoElement = document.getElementById('video');
        videoElement.style.display = 'block';
        videoElement.src = 'IMG_5435.mov';
    }

    function hideVideo() {
        let videoElement = document.getElementById('video');
        videoElement.pause();
        videoElement.currentTime = 0;
        videoElement.style.display = 'none';
        mainButton.style.display = 'block';
    }
 })();