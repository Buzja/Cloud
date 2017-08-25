$(document).ready(function() {
	var audioplayer = $('.audio-player'),
		audioElement = $('.audio-player audio')[0],
		play = $('.audio-player .play'),
		progress = $('.audio-player .progress')[0],
		volume = $('.audio-player .volume');

	function updateProgressBar() {
		var progressPercentage = audioElement.currentTime / audioElement.duration;

		progress.value = progressPercentage;
	}

	function playOrPause() {
		if (audioElement.paused) {
			audioElement.play();	
		} else {
			audioElement.pause();
		}
	}

	function updateVolume(event) {
		var xPosition = event.pageX - this.offsetLeft,
        	clickedValue = xPosition * this.max / this.offsetWidth;
    
    	clickedValue = (clickedValue > 1) ? 1 : clickedValue;
    	clickedValue = (clickedValue < 0) ? 0 : clickedValue;

    	volume[0].value = clickedValue;
    	audioElement.volume = clickedValue;
	}

	play.click(playOrPause);

	volume.click(updateVolume);

	setInterval(updateProgressBar, 10);

});
