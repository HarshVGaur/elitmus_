function showClue(clueId) {
	var clue = document.getElementById(clueId);
	clue.style.display = "block";
}
function checkName() {
	var userInput = document.getElementById("userInput").value;
	if (userInput.toLowerCase() === "ms dhoni") {
	  alert("YOU WON!!!");
	} else {
	  alert("Better Luck Next Time");
	}
  }
  
  var audio = document.getElementById("myAudio");
  var currentPlaybackTime = 0;
  
  // Check if the audio playback position is stored in sessionStorage
  if (sessionStorage.getItem("playbackTime")) {
    currentPlaybackTime = sessionStorage.getItem("playbackTime");
  }
  
  // Set the audio playback position to the stored value
  audio.currentTime = currentPlaybackTime;
  
  // Store the current playback position in sessionStorage when the audio is played or paused
  audio.addEventListener("play", function() {
    sessionStorage.setItem("playbackTime", audio.currentTime);
  });
  audio.addEventListener("pause", function() {
    sessionStorage.setItem("playbackTime", audio.currentTime);
  });