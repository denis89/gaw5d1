$(document).ready(function() {

// Declaring variables refering to the corresponding HTML Elements
  var getTextMusic = $('#textmusic');
  var albumSelect = $('#album-select');
  var artistSelect = $('#artist-select');
  var trackSelect = $('#track-select');
  var button = $('#get-music');

  //Add EventListener to the variables
  getTextMusic.on('change', functionn); 

  albumSelect.on('change', functionn);
  artistSelect.on('change', functionn);
  trackSelect.on('change', functionn);
  button.on('click', getMusic);

function getMusic(e){
  
}












});