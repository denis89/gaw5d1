$(document).ready(function() {

// Declaring variables refering to the corresponding HTML Elements
  var getTextMusic = $('#textmusic');
  var albumSelect = $('#album-select');
  var artistSelect = $('#artist-select');
  var trackSelect = $('#track-select');
  var button = $('#get-music');
  var results = $('#results');

  //Add EventListener to the variables
  //getTextMusic.on('change', functionn); 
//
  //albumSelect.on('change', functionn);
  //artistSelect.on('change', functionn);
  //trackSelect.on('change', functionn);
  button.on('click', getMusic);

function getMusic(e){
  $.get('https://api.spotify.com/v1/search?q=coldplay&type=artist', function(response) {
      albumSelect.empty();

      var albums = [];

      $.each(response, function(index, item) {
        if ($.inArray(item.album, albums) === -1 && item.album) {
          albums.push(item.album);
          albumSelect.append('<option value="' + item.album + '">' + item.album + '</option>');
        };
      });
      albumSelect.prepend('<option value="default">-- Select your album --</option>');
    });
  }
  











});