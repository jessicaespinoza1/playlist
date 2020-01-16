var songs = ["No Guidance","Que tal si eres tu"," No idea","como olvidarte"];
var Artist = ["Chris Brown","Los tigeres del norte","Don Toliver","El Bebeto"];
 songs.forEach(function(song) {
    
      $(".songName").append("<div>" + song + "</div>");
    }); 
//     Artist.forEach(function(song) {
//       $(".Artist").append("<div>" + song + "</div>");
//     }); 